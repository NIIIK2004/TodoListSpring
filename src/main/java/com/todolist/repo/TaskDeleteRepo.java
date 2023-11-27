package com.todolist.repo;

import com.todolist.model.TaskDeletes;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TaskDeleteRepo extends JpaRepository<TaskDeletes, Long> {
    @Transactional
    @Modifying
    @Query("DELETE FROM TaskDeletes t WHERE t.id = :id")
    void deleteTaskDeletesById(@Param("id") Long id);
}