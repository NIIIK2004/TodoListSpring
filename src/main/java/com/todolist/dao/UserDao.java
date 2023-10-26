package com.todolist.dao;

import com.todolist.model.Role;
import com.todolist.model.User;

import java.util.Optional;

public interface UserDao {
    User save(User user, Role role);
    void delete(Long id);
    User findByUsername(String username);
    Optional<User> findById(Long id);
}
