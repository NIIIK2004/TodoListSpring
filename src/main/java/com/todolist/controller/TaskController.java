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
import org.springframework.web.bind.annotation.*;

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
        model.addAttribute("user", user);
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

    @GetMapping("/tasks/{id}/details")
    public String taskDetails(@PathVariable("id") Long id, Model model) {
        Task task = taskImpl.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid" + id));
        model.addAttribute("task", task);
        return "details";
    }

    @GetMapping("/tasks/{id}/delete")
    public String taskDelete(@PathVariable("id") Long id) {
        Task task = taskImpl.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid" + id));
        taskImpl.moveTaskInDeleted(task);

        return "redirect:/";
    }

}