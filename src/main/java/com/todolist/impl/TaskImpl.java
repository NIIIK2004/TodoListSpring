package com.todolist.impl;

import com.todolist.dao.TaskDao;
import com.todolist.model.Task;
import com.todolist.model.TaskCategory;
import com.todolist.model.TaskStatus;
import com.todolist.repo.TaskRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskImpl implements TaskDao {
    private final TaskRepo taskRepo;
    private final TaskStatusImpl taskStatusImpl;
    private final TaskCategoryImpl taskCategoryImpl;

    @Override
    public Task save(Task task) {
        taskRepo.save(task);
        return task;
    }

    @Override
    public List<Task> findAll() {
        return taskRepo.findAll();
    }

    @Override
    public Optional<Task> findById(Long id) {
        return taskRepo.findById(id);
    }

    public Task saveTask(Task task, Long statusId, Long categoryId) {
        TaskStatus taskStatus = taskStatusImpl.findById(statusId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid status id"));
        TaskCategory taskCategory = taskCategoryImpl.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid category id"));
        task.setStatus(taskStatus);
        task.setCategory(taskCategory);
        return save(task);
    }
}