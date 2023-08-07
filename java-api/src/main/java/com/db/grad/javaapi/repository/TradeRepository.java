package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Trade;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Integer> {
    @Query(nativeQuery = true, value = "SELECT * FROM trades WHERE book_id = :bookId")
    List<Trade> findByBookId(long bookId);

    @Query(nativeQuery = true, value = "SELECT * FROM trades WHERE isin = :isin")
    List<Trade> findByBookIdAndIsin( String isin);
}
