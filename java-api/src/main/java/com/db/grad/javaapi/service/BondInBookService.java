package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BondInBook;

import java.util.List;

public interface BondInBookService {
    public List<BondInBook> getBondsInBook(long bookId);

}
