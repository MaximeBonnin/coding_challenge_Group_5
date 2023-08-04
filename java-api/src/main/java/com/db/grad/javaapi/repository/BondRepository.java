package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Bond;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BondRepository extends JpaRepository<Bond, Integer> {

    // get all bonds
    @Query(nativeQuery = true, value = "SELECT bond.isin, bond.cusip, issuer.issuer_name, bond.maturity_date, bond.coupon, bond.bond_type, bond.face_value, bond.currency, bond.bond_status FROM bond INNER JOIN issuer ON issuer.id = bond.issuer_id;")
    List<Bond> findAll();

}
