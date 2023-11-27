package com.todolist.controller;

import com.todolist.impl.UserImpl;
import com.todolist.model.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
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
    public String registration(@ModelAttribute("user") User user, BindingResult result, Model model, RedirectAttributes redirectAttributes) {
        try {
            userImpl.registerAuthUser(user, redirectAttributes);
            return "redirect:/login";
        } catch (IllegalArgumentException e) {
            result.rejectValue("username", "", e.getMessage());
            model.addAttribute("user", user);
            return "registration";
        }
    }

    @GetMapping("/login")
    public String login() {
        return "auth";
    }

    @GetMapping("/profile")
    public String userProfile(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        User user = userImpl.findByUsername(userDetails.getUsername());
        model.addAttribute("user", user);
        return "profile";
    }

    @GetMapping("/profile/settings")
    public String userSettings(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        User user = userImpl.findByUsername(userDetails.getUsername());
        model.addAttribute("user", user);
        return "settings";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        userImpl.logout(request, response);
        return "redirect:/login?logout";
    }
}
