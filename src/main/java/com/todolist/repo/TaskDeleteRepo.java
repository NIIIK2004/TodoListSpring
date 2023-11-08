package com.todolist.repo;

import com.todolist.model.TaskDeletes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskDeleteRepo extends JpaRepository<TaskDeletes, Long> {

}