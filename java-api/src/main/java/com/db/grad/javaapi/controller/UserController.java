package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.service.UserHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.db.grad.javaapi.model.User;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private UserHandler userService;

    @Autowired
    public UserController(UserHandler us)
    {
        userService = us;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity < User > getUserById(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
        User thisUser = userService.getUserById(id);
        return ResponseEntity.ok().body(thisUser);
    }

}
