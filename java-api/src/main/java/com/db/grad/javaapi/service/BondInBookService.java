package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BondInBook;

import java.util.List;

public interface BondInBookService {
    List<BondInBook> getBondsInBook(long bookId);
    List<BondInBook> getBondsInBookByMaturityDate(long bookId, String date);  // Added this line
}
