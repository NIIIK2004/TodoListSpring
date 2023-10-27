package com.todolist.controller;

import com.todolist.impl.UserImpl;
import com.todolist.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
@RequiredArgsConstructor
public class AuthController {
    private final UserImpl userImpl;

    @GetMapping("/registration")
    public String registrPage(Model model) {
        model.addAttribute("user", new User());
        return "registration";
    }

    @PostMapping("/registration/save")
    public String registration(@ModelAttribute("user") User user, BindingResult result, Model model, RedirectAttributes attributes) {
        try {
            userImpl.registerAuthUser(user, attributes);
            return "redirect:/login";
        } catch (IllegalArgumentException e) {
            result.rejectValue("userName", "", e.getMessage());
            model.addAttribute("user", user);
            return "registration";
        }
    }

    @GetMapping("/login")
    public String login() {
        return "auth";
    }
}
