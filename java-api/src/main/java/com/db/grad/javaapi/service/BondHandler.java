package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.repository.BondRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BondHandler implements BondService{
    @Autowired
    BondRepository bondRepository;
    @Override
    public List<Bond> getAllBonds() {
        List<Bond> bonds = bondRepository.getAllBonds();
        System.out.println(bonds);
        return bonds;
    }

    @Override
    public List<Bond> findAllBondsAroundDate(String date) {
        List<Bond> bonds = bondRepository.findAllBondsAroundDate(date);
        System.out.println(bonds);
        return bonds;
    }
}
