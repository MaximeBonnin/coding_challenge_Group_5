package com.db.grad.javaapi.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "trades")
public class Trade {
    @Id
    private Long id;

    private int book_id;

    private String isin;

    private int issuerId;
    private String currency;
    private String tradeStatus;

    private int quantity;
    private double unitPrice;
    private String orderType;
    private Date tradeDate;
    private Date settleDate;
    public Trade(){ }
    public Trade(Long id, int book_id, String isin, int issuerId, String currency,
                 String tradeStatus, int quantity, double unitPrice, String orderType,
                 Date tradeDate, Date settleDate) {
        this.id = id;
        this.book_id = book_id;
        this.isin = isin;
        this.issuerId = issuerId;
        this.currency = currency;
        this.tradeStatus = tradeStatus;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.orderType = orderType;
        this.tradeDate = tradeDate;
        this.settleDate = settleDate;
    }
    @Id
    @Column(name="id", nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    @Column(name="book_id", nullable = false)
    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }
    @Column(name="isin", nullable = false)
    public String getIsin() {
        return isin;
    }

    public void setIsin(String isin) {
        this.isin = isin;
    }
    @Column(name="issuer_id", nullable = false)
    public int getIssuerId() {
        return issuerId;
    }

    public void setIssuerId(int issuer_id) {
        this.issuerId = issuer_id;
    }
    @Column(name="currency", nullable = false)
    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
    @Column(name="trade_status", nullable = false)
    public String getTradeStatus() {
        return tradeStatus;
    }

    public void setTradeStatus(String tradeStatus) {
        this.tradeStatus = tradeStatus;
    }
    @Column(name="quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    @Column(name="unit_price", nullable = false)
    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }
    @Column(name="order_type", nullable = false)
    public String getOrderType() {
        return orderType;
    }

    public void setOrderType(String orderType) {
        this.orderType = orderType;
    }
    @Column(name="trade_date", nullable = false)
    public Date getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(Date tradeDate) {
        this.tradeDate = tradeDate;
    }
    @Column(name="settle_date", nullable = false)
    public Date getSettleDate() {
        return settleDate;
    }

    public void setSettleDate(Date settleDate) {
        this.settleDate = settleDate;
    }

    @Override
    public String toString() {
        return "Trade{" +
                "id=" + id +
                ", book_id=" + book_id +
                ", isin='" + isin + '\'' +
                ", issuerId=" + issuerId +
                ", currency='" + currency + '\'' +
                ", tradeStatus='" + tradeStatus + '\'' +
                ", quantity=" + quantity +
                ", unitPrice=" + unitPrice +
                ", orderType='" + orderType + '\'' +
                ", tradeDate=" + tradeDate +
                ", settleDate=" + settleDate +
                '}';
    }
}
