package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.LoginRequest;
import com.db.grad.javaapi.service.TokenService;
import com.db.grad.javaapi.service.UserHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.db.grad.javaapi.model.User;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);
    private UserHandler userService;

    private final TokenService tokenService;
    @GetMapping
    public String home() {
        return "Hello JWT" ;
    }

    @Autowired
    public UserController(UserHandler us, TokenService tokenService)
    {
        userService = us;
        this.tokenService = tokenService;
    }

    @GetMapping("/user/{id}")
    public ResponseEntity < User > getUserById(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
        User thisUser = userService.getUserById(id);
        return ResponseEntity.ok().body(thisUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {

        User loggedInUser = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (loggedInUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String token = tokenService.generateToken(loggedInUser);
        return ResponseEntity.ok().body(token);
    }





}
