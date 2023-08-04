package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;

import java.util.List;

public interface BondService {
    public List<Bond> getAllBonds();
    public List<Bond> findAllBondsAroundDate(String date);

}
