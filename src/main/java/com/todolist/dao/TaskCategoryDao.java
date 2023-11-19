package com.todolist.dao;

import com.todolist.model.TaskCategory;

import java.util.List;
import java.util.Optional;

public interface TaskCategoryDao {
    List<TaskCategory> findAll();
    Optional<TaskCategory> findById(Long id);
    List<TaskCategory> findAllWithTasks();
}