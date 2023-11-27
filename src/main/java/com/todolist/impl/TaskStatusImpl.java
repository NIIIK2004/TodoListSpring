package com.todolist.impl;

import com.todolist.dao.TaskStatusDao;
import com.todolist.model.TaskStatus;
import com.todolist.repo.TaskStatusRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskStatusImpl implements TaskStatusDao {
    private final TaskStatusRepo taskStatusRepo;

    @Override
    public List<TaskStatus> findAll() {
        return taskStatusRepo.findAll();
    }

    @Override
    public Optional<TaskStatus> findById(Long id) {
        return taskStatusRepo.findById(id);
    }
}