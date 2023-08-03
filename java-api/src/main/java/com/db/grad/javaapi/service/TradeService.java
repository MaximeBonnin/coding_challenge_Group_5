package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Trade;

import java.util.List;

public interface TradeService {
    public List<Trade> getAllTrades();

    public List<Trade> getTradesByBookId(long bookId);

}
