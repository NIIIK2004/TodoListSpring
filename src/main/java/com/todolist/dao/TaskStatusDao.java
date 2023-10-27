package com.todolist.dao;

import com.todolist.model.TaskStatus;

import java.util.List;
import java.util.Optional;

public interface TaskStatusDao {
    List<TaskStatus> findAll();

    Optional<TaskStatus> findById(Long id);
}
