package com.todolist.controller;

import com.todolist.impl.*;
import com.todolist.model.Task;
import com.todolist.model.TaskDeletes;
import com.todolist.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private final TaskDeletesImpl taskDeletesImpl;

    @GetMapping("/")
    public String tasksPage(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        User user = userImpl.findByUsername(userDetails.getUsername());
        model.addAttribute("user", user);
        model.addAttribute("tasks", taskImpl.findByUser(user));
        model.addAttribute("categoriesWithTasks", taskCategoryImpl.findAllWithTasks());
        model.addAttribute("taskStatuses", taskStatusImpl.findAll());
        model.addAttribute("taskCategories", taskCategoryImpl.findAll());
        model.addAttribute("user", user);
        return "index";
    }

    @GetMapping("/task-add")
    public String addTaskPage(Model model) {
        model.addAttribute("taskStatuses", taskStatusImpl.findAll());
        model.addAttribute("taskCategories", taskCategoryImpl.findAll());
        return "task-add";
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

    @GetMapping("/deleted-tasks")
    public String deletedTasksPage(@AuthenticationPrincipal UserDetails userDetails, Model model) {
        User user = userImpl.findByUsername(userDetails.getUsername());
        model.addAttribute("user", user);
        model.addAttribute("deletedTasks", taskImpl.findArchivedTasksByUser(user));
        return "tasks_deletes";
    }

    @DeleteMapping("/deleted-tasks/{id}/delete")
    public ResponseEntity<String> deleteTask(@PathVariable Long id, @AuthenticationPrincipal UserDetails user) {
        try {
            Task task = taskImpl.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid" + id));
            taskImpl.moveTaskInDeleted(task, user);
            return ResponseEntity.ok().body("{\"message\": \"Task successfully deleted\"}");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @DeleteMapping("/deleted-tasks/{id}/restore")
    public ResponseEntity<String> restoreTask(@PathVariable Long id, @AuthenticationPrincipal UserDetails userDetails) {
        try {
            TaskDeletes taskToDelete = taskDeletesImpl.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid" + id));
            taskImpl.restoreTaskFromDeleted(taskToDelete, userDetails);
            return ResponseEntity.ok().body("{\"message\": \"Task successfully restored\"}");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}