package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.BondInBook;
import com.db.grad.javaapi.repository.BondInBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondInBookHandler implements BondInBookService{
    @Autowired
    BondInBookRepository bondInBookRepository;
    @Override
    public List<BondInBook> getBondsInBook(long bookId) {
        List<BondInBook> bondsInBook = bondInBookRepository.findBondsInBook(bookId);
        System.out.println(bondsInBook);
        return bondsInBook;
    }
}
