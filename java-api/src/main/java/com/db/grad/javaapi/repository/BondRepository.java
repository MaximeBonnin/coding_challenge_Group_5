package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BondRepository extends JpaRepository<Bond, Integer> {
    @Query(nativeQuery = true, value =
            "SELECT isin, cusip, issuer.issuer_name, maturity_Date, coupon, bond_Type, face_Value, " +
                    "currency, bond_Status FROM bond, issuer WHERE bond.issuer_id = issuer.id;")
    List<Bond> getAllBonds();
}


