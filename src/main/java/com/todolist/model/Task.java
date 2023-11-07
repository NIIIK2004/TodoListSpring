package com.todolist.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Size(max = 160)
    private String name;
    @NotNull
    @Size(max = 2000)
    private String description;
    @ManyToOne
    @JoinColumn(name = "status_id")
    private TaskStatus status;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private TaskCategory category;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}