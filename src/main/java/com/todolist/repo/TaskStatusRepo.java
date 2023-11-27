package com.todolist.repo;

import com.todolist.model.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskStatusRepo extends JpaRepository<TaskStatus, Long> {
}