package com.todolist.controller;

import com.todolist.impl.TaskCategoryImpl;
import com.todolist.impl.TaskImpl;
import com.todolist.impl.TaskStatusImpl;
import com.todolist.impl.UserImpl;
import com.todolist.model.Task;
import com.todolist.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class TaskController {
    private final TaskImpl taskImpl;
    private final UserImpl userImpl;
    private final TaskStatusImpl taskStatusImpl;
    private final TaskCategoryImpl taskCategoryImpl;

    @GetMapping("/")
    public String tasksPage(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        User user = userImpl.findByUsername(userDetails.getUsername());
        model.addAttribute("tasks", taskImpl.findByUser(user));
        model.addAttribute("taskStatuses", taskStatusImpl.findAll());
        model.addAttribute("taskCategories", taskCategoryImpl.findAll());
        return "index";
    }

    @GetMapping("/task-add")
    public String addTaskPage(Model model) {
        model.addAttribute("taskStatuses", taskStatusImpl.findAll());
        model.addAttribute("taskCategories", taskCategoryImpl.findAll());
        return "add_task";
    }

    @PostMapping("/task/save")
    public String taskSave(@ModelAttribute("task") Task task,
                           @AuthenticationPrincipal UserDetails user,
                           @RequestParam("status") Long statusId,
                           @RequestParam("category") Long categoryId) {
        taskImpl.saveTask(task, user, statusId, categoryId);
        return "redirect:/";
    }
}