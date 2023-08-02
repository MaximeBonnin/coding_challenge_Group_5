package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeHandler implements TradeService{
    TradeRepository tradeRepository;
    @Override
    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }
}
