package com.todolist.dao;

import com.todolist.model.Task;

import java.util.List;
import java.util.Optional;

public interface TaskDao {
    void save(Task task);
    List<Task> findAll();
    Optional<Task> findById(Long id);
}