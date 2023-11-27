package com.todolist.impl;

import com.todolist.dao.TaskDao;
import com.todolist.dao.UserDao;
import com.todolist.model.*;
import com.todolist.repo.TaskDeleteRepo;
import com.todolist.repo.TaskRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskImpl implements TaskDao {
    private final TaskRepo taskRepo;
    private final TaskDeleteRepo taskDeleteRepo;
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

    public List<TaskDeletes> findArchivedTasksByUser(User user) {
        return taskRepo.findArchivedTasksByUser(user);
    }

    public void moveTaskInDeleted(Task task, UserDetails userDetails) {
        User user = userDao.findByUsername(userDetails.getUsername());
        TaskDeletes taskDelete = new TaskDeletes();
        taskDelete.setTask(task);
        taskDelete.setUser(user);
        task.setArchived(true);

        taskDeleteRepo.save(taskDelete);
        taskRepo.save(task);
    }

    public void restoreTaskFromDeleted(TaskDeletes taskDelete, UserDetails userDetails) {
        User user = userDao.findByUsername(userDetails.getUsername());
        Task task = taskDelete.getTask();
        task.setUser(user);
        task.setArchived(false);
        taskDeleteRepo.deleteTaskDeletesById(taskDelete.getId());
        taskRepo.save(task);
    }

    public void saveTask(Task task, UserDetails userDetails, Long statusId, Long categoryId) {
        TaskStatus taskStatus = taskStatusImpl.findById(statusId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid status id"));
        TaskCategory taskCategory = taskCategoryImpl.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid category id"));

        User user = userDao.findByUsername(userDetails.getUsername());
        task.setUser(user);
        task.setDate(LocalDate.now());
        task.setStatus(taskStatus);
        task.setCategory(taskCategory);
        save(task);
    }
}