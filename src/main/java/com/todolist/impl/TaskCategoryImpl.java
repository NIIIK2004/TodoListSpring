package com.todolist.impl;

import com.todolist.dao.TaskCategoryDao;
import com.todolist.model.TaskCategory;
import com.todolist.repo.TaskCategoryRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TaskCategoryImpl implements TaskCategoryDao {
    private final TaskCategoryRepo taskCategoryRepo;

    @Override
    public List<TaskCategory> findAll() {
        return taskCategoryRepo.findAll();
    }

    @Override
    public Optional<TaskCategory> findById(Long id) {
        return taskCategoryRepo.findById(id);
    }
}