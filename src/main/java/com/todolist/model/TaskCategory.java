package com.todolist.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "task_categories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serverCategory;
    private String clientCategory;
    @OneToMany(mappedBy = "category")
    private List<Task> tasks;
}