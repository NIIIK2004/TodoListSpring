package com.todolist.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Pattern(regexp = "^[A-Za-zА-Яа-я\\-]+$")
    @Size(max = 50)
    private String name;
    @NotNull
    @Pattern(regexp = "^[A-Za-zА-Яа-я\\-]+$")
    @Size(max = 50)
    private String surname;
    @NotNull
    @Size(max = 80)
    @Pattern(regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")
    private String email;
    @NotNull
    @Size(min = 5, max = 60)
    @Pattern(regexp = "^[^а-яА-Я]*$")
    private String password;
    @NotNull
    @Size(min = 5, max = 60)
    @Pattern(regexp = "^[a-zA-Z0-9_]+$")
    private String username;

    @CollectionTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"))
    @ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<Role> roles;

    @OneToMany(mappedBy = "user")
    private List<Task> tasks;
}