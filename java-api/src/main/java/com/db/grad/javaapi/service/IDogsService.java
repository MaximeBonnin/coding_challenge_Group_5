package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Dog;

import com.db.grad.javaapi.model.User;

import java.util.List;
import java.util.Optional;

public interface IDogsService
{
    public List<Dog> getAllDogs();

    public Dog addDog(Dog theDog);

    public long getNoOfDogs();

    public boolean removeDog(long uniqueId);

    public Dog getDogById(long uniqueId);

    public Dog getDogByName(String dogsName );

    public Dog updateDogDetails(Dog dogToUpdate);

    public User getUserById(long uniqueId);
}
