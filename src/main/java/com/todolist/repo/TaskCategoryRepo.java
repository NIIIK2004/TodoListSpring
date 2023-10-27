package com.todolist.repo;

import com.todolist.model.TaskCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskCategoryRepo extends JpaRepository<TaskCategory, Long> {
}
