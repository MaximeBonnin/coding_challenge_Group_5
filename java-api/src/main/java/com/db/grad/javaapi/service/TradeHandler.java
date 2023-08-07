package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeHandler implements TradeService{
    @Autowired
    TradeRepository tradeRepository;
    @Override
    public List<Trade> getAllTrades() {
        List<Trade> trades = tradeRepository.findAll();
        System.out.println(trades);
        return trades;
    }

    @Override    
    public List<Trade> getTradesByBookId(long bookId)
    {
        return tradeRepository.findByBookId(bookId);
    }

    @Override    
    public List<Trade> getTradesByBookIdAndIsin(long bookId, String isin)
    {
        return tradeRepository.findByBookIdAndIsin(bookId, isin);
    }
}
