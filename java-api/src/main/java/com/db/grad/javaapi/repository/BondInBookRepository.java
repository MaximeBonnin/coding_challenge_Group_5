package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.BondInBook;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BondInBookRepository extends JpaRepository<BondInBook, Integer> {

    // get all bonds
    @Query(nativeQuery = true, value = "SELECT bond.isin, bond.cusip, issuer.issuer_name, bond.maturity_date, bond.coupon, bond.bond_type, bond.face_value, bond.currency, bond.bond_status, trades.book_id FROM bond INNER JOIN issuer ON issuer.id = bond.issuer_id INNER JOIN trades ON trades.isin = bond.isin WHERE trades.book_id = :bookId ;")
    List<BondInBook> findBondsInBook(long bookId);

    @Query(nativeQuery = true, value = "SELECT bond.isin, bond.cusip, issuer.issuer_name, bond.maturity_date, bond.coupon, bond.bond_type, bond.face_value, bond.currency, bond.bond_status, trades.book_id FROM bond INNER JOIN issuer ON issuer.id = bond.issuer_id INNER JOIN trades ON trades.isin = bond.isin AND trades.book_id = :bookId WHERE bond.maturity_date BETWEEN DATEADD('DAY', -5, CAST(:date AS DATE)) AND DATEADD('DAY', 5, CAST(:date AS DATE));")
    List<BondInBook> findBondsInBookByMaturityDate(long bookId, String date);

}
