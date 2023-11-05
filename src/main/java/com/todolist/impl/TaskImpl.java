package com.todolist.impl;

import com.todolist.dao.TaskDao;
import com.todolist.dao.UserDao;
import com.todolist.model.Task;
import com.todolist.model.TaskCategory;
import com.todolist.model.TaskStatus;
import com.todolist.model.User;
import com.todolist.repo.TaskRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskImpl implements TaskDao {
    private final TaskRepo taskRepo;
    private final UserDao userDao;
    private final TaskStatusImpl taskStatusImpl;
    private final TaskCategoryImpl taskCategoryImpl;

    @Override
    public void save(Task task) {
        taskRepo.save(task);
    }

    @Override
    public List<Task> findAll() {
        return taskRepo.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepo.findById(id);
    }

    public List<Task> findByUser(User user) {
        return taskRepo.findByUser(user);
    }

    public void saveTask(Task task, UserDetails userDetails, Long statusId, Long categoryId) {
        TaskStatus taskStatus = taskStatusImpl.findById(statusId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid status id"));
        TaskCategory taskCategory = taskCategoryImpl.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid category id"));

        User user = userDao.findByUsername(userDetails.getUsername());
        task.setUser(user);
        task.setStatus(taskStatus);
        task.setCategory(taskCategory);
        save(task);
    }
}