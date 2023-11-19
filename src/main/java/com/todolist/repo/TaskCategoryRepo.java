package com.todolist.repo;

import com.todolist.model.TaskCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskCategoryRepo extends JpaRepository<TaskCategory, Long> {
    @Query("SELECT DISTINCT tc FROM TaskCategory tc LEFT JOIN FETCH tc.tasks")
    List<TaskCategory> findAllWithTasks();
}