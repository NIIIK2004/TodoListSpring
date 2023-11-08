package com.todolist.repo;

import com.todolist.model.Task;
import com.todolist.model.TaskDeletes;
import com.todolist.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepo extends JpaRepository<Task, Long> {
    @Query("SELECT r FROM Task r WHERE r.user = :user")
    List<Task> findByUser(@Param("user") User user);

    @Query("SELECT r FROM TaskDeletes r WHERE r.task.user = :user AND r.task.archived = true")
    List<TaskDeletes> findArchivedTasksByUser(@Param("user") User user);
}