package com.todolist.dao;

import com.todolist.model.TaskDeletes;

import java.util.List;
import java.util.Optional;

public interface TaskDeleteDao {
    void save(TaskDeletes taskDeletes);
    List<TaskDeletes> findAll();
    Optional<TaskDeletes> findById(Long id);
}