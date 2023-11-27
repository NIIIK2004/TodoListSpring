package com.todolist.impl;

import com.todolist.dao.TaskDeletesDao;
import com.todolist.model.TaskDeletes;
import com.todolist.repo.TaskDeleteRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskDeletesImpl implements TaskDeletesDao {
    private final TaskDeleteRepo taskDeleteRepo;

    @Override
    public Optional<TaskDeletes> findById(Long id) {
        return taskDeleteRepo.findById(id);
    }
}
