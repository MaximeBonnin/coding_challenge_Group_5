package com.db.grad.javaapi.controller;


import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.service.BondHandler;
import com.db.grad.javaapi.service.BondInBookHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BondController {

    @Autowired
    private BondHandler bondService;

    @Autowired
    private BondInBookHandler bondInBookService;

    @GetMapping("/bonds")
    public List<?> getBonds(
            @RequestParam(value = "book_id", required = false) Long bookId,
            @RequestParam(value = "maturity_date", required = false) String date)
    throws ResourceNotFoundException {
        if (bookId != null && date != null) {
            // Implement a method in BondInBookHandler that retrieves bonds based on bookId and date.
            return bondInBookService.getBondsInBookByMaturityDate(bookId, date);
        } else if (bookId != null) {
            return bondInBookService.getBondsInBook(bookId);
        } else if (date != null) {
            return bondService.findAllBondsAroundDate(date);
        } else {
            return bondService.getAllBonds();
        }
    }
}

