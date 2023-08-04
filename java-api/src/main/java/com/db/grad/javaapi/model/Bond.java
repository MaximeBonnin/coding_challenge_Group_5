package com.db.grad.javaapi.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "bond")
public class Bond {
    @Id
    private String isin;

    private String cusip;
    private String issuerName;
    private Date maturityDate;
    private double coupon;
    private String bondType;
    private int faceValue;
    private String currency;
    private String bondStatus;

    public Bond(){ }
    public Bond(String isin, String cusip, String issuerName, Date maturityDate, double coupon,
                String bondType, int faceValue, String currency, String bondStatus) {
        this.isin = isin;
        this.cusip = cusip;
        this.issuerName = issuerName;
        this.maturityDate = maturityDate;
        this.coupon = coupon;
        this.bondType = bondType;
        this.faceValue = faceValue;
        this.currency = currency;
        this.bondStatus = bondStatus;
    }
    @Id
    @Column(name="isin", nullable = false)
    public String getIsin() {
        return isin;
    }

    public void setIsin(String isin) {
        this.isin = isin;
    }

    @Column(name="cusip", nullable = false)
    public String getCusip() {
        return cusip;
    }

    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    @Column(name="issuer_name", nullable = false)
    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    @Column(name="maturity_date", nullable = false)
    public Date getMaturityDate() {
        return maturityDate;
    }

    public void setMaturityDate(Date maturityDate) {
        this.maturityDate = maturityDate;
    }

    @Column(name="coupon", nullable = false)
    public double getCoupon() {
        return coupon;
    }

    public void setCoupon(double coupon) {
        this.coupon = coupon;
    }

    @Column(name="bond_type", nullable = false)
    public String getBondType() {
        return bondType;
    }

    public void setBondType(String bondType) {
        this.bondType = bondType;
    }

    @Column(name="face_value", nullable = false)
    public int getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(int faceValue) {
        this.faceValue = faceValue;
    }

    @Column(name="currency", nullable = false)
    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    @Column(name="bond_status", nullable = false)
    public String getBondStatus() {
        return bondStatus;
    }

    public void setBondStatus(String bondStatus) {
        this.bondStatus = bondStatus;
    }
}
