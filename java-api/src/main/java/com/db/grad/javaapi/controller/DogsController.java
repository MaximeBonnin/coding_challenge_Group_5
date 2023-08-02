package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Dog;   // TODO: remove this
import com.db.grad.javaapi.service.DogHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.db.grad.javaapi.model.User;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class DogsController {
    private DogHandler dogsService;

    @Autowired
    public DogsController(DogHandler ds)
    {
        dogsService = ds;
    }

    @GetMapping("/dogs")
    public List <Dog> getAllDogs() {
        return dogsService.getAllDogs();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity < User > getUserById(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
        User thisUser = dogsService.getUserById(id);
        return ResponseEntity.ok().body(thisUser);
    }

    @PostMapping("/dogs")
    public Dog createDog(@Valid @RequestBody Dog dog) {
        return dogsService.addDog(dog);
    }

    @PutMapping("/dogs/{id}")
    public ResponseEntity < Dog > updateDog(@PathVariable(value = "id") Long id,
        @Valid @RequestBody Dog dogDetails) throws ResourceNotFoundException {

        final Dog updatedDogs = dogsService.updateDogDetails(dogDetails);
        return ResponseEntity.ok(updatedDogs);
    }

    @DeleteMapping("/dogs/{id}")
    public Map < String, Boolean > deleteDog(@PathVariable(value = "id") Long id)
    throws ResourceNotFoundException {
    	boolean removed = dogsService.removeDog(id);

        Map < String, Boolean > response = new HashMap <>();
        if( removed )
            response.put("deleted", Boolean.TRUE);
        else
            response.put("deleted", Boolean.FALSE);

        return response;
    }
}
