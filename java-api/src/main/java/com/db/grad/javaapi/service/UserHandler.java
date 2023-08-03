package com.db.grad.javaapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.repository.UserRepository;
import com.db.grad.javaapi.model.User;
import java.util.List;
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


    public User loginUser(String email, String password) {
        List<User> allUsers = itsUserRepo.findAll();
        for (User user : allUsers) {
            if(user.getUserPassword().equals(password) && user.getEmail().equals(email)) {
                return user;
            }
        }



        return null;
    }
}
