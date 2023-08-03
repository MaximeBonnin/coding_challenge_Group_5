package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService
{
    

    public User getUserById(long uniqueId);
}
