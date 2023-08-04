package com.db.grad.javaapi.controller;


import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.BondInBook;
import com.db.grad.javaapi.service.BondInBookHandler;
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
public class BondInBookController {
    @Autowired
    BondInBookHandler bondInBookService;
    @GetMapping("/bonds/by_book_id/{book_id}")
    public List<BondInBook> getBondByBookId(@PathVariable(value = "book_id") Long bookId)
    throws ResourceNotFoundException {
        return bondInBookService.getBondsInBook(bookId);
    }

}
