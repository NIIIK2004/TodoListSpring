package com.todolist.controller;

import com.todolist.impl.UserImpl;
import com.todolist.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class AuthController {
    private final UserImpl userImpl;

    @GetMapping("/registration")
    public String registrPage(Model model) {
        model.addAttribute("user", new User());
        return "registration";
    }
    @GetMapping("/login")
    public String login() {
        return "auth";
    }
}
