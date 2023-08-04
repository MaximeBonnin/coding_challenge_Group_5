package com.db.grad.javaapi.controller;


import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.service.BondHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BondController {
    @Autowired
    BondHandler bondService;
    @GetMapping("/bonds")
    public List<Bond> getAllBonds() {
        return bondService.getAllBonds();
    }

    @GetMapping("/bonds/by_date/{maturity_date}")
    public List<Bond> getBondByBookId(@PathVariable(value = "maturity_date") String date)
    throws ResourceNotFoundException {
        return bondService.findAllBondsAroundDate(date);
    }

}
