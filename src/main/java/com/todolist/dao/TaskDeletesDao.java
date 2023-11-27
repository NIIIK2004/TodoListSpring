package com.todolist.dao;

import com.todolist.model.TaskDeletes;

import java.util.Optional;

public interface TaskDeletesDao {
    Optional<TaskDeletes> findById(Long id);
}
