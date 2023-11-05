package com.todolist.controller;

import com.todolist.impl.TaskCategoryImpl;
import com.todolist.impl.TaskImpl;
import com.todolist.impl.TaskStatusImpl;
import com.todolist.impl.UserImpl;
import com.todolist.model.Task;
import com.todolist.model.TaskCategory;
import com.todolist.model.TaskStatus;
import com.todolist.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class TaskController {
    private final TaskImpl taskImpl;
    private final UserImpl userImpl;
    private final TaskStatusImpl taskStatusImpl;
    private final TaskCategoryImpl taskCategoryImpl;

    @GetMapping("/")
    public String tasksPage(Principal principal, Model model) {
        String username = principal.getName();
        User user = userImpl.findByUsername(username);
        if (user == null) {
            return "redirect:/login?logout";
        }
        List<Task> userTasks = taskImpl.findByUser(user);

        List<TaskStatus> tasksStatuses = taskStatusImpl.findAll();
        List<TaskCategory> taskCategories = taskCategoryImpl.findAll();

        model.addAttribute("tasks", userTasks);
        model.addAttribute("taskStatuses", tasksStatuses);
        model.addAttribute("taskCategories", taskCategories);
        return "index";
    }

    @GetMapping("/task-add")
    public String addTaskPage(Model model) {
        List<TaskStatus> taskStatuses = taskStatusImpl.findAll();
        List<TaskCategory> taskCategories = taskCategoryImpl.findAll();

        model.addAttribute("taskStatuses", taskStatuses);
        model.addAttribute("taskCategories", taskCategories);
        return "add_task";
    }

    @PostMapping("/task/save")
    public String taskSave(@ModelAttribute("task") Task task,
                           Principal principal,
                           @RequestParam("status") Long statusId,
                           @RequestParam("category") Long categoryId) {
        taskImpl.saveTask(task, principal, statusId, categoryId);
        return "redirect:/";
    }
}