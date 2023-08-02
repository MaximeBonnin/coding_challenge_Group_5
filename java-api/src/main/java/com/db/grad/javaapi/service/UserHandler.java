package com.db.grad.javaapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.repository.UserRepository;
import com.db.grad.javaapi.model.User;

@Service
public class UserHandler implements UserService
{
    private UserRepository itsUserRepo;

    @Autowired
    public UserHandler( UserRepository userRepo )
    {
        itsUserRepo = userRepo;
    }

    @Override    
    public User getUserById(long uniqueId)
    {
        return itsUserRepo.findById(uniqueId).get();
    }

    
}
