package com.db.grad.javaapi.controller;


import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.service.TradeHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeController {
    @Autowired
    TradeHandler tradeService;
    @GetMapping("/trades")
    public List<Trade> getAllTrades() {
        return tradeService.getAllTrades();
    }


    @GetMapping("/trades/{book_id}")
    public List<Trade> getTradesByBookId(@PathVariable(value = "book_id") Long bookId)
    throws ResourceNotFoundException {
        return tradeService.getTradesByBookId(bookId);
    }

    
    @GetMapping("/trades/{book_id}/{isin}")
    public List<Trade> getTradesByBookId(
        @PathVariable(value = "book_id") Long bookId,
        @PathVariable(value = "isin") String isin)
    throws ResourceNotFoundException {
        return tradeService.getTradesByBookIdAndIsin(bookId, isin);
    }

}
