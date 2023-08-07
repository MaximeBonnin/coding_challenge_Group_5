import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';
import { fetchBonds } from '../../services/allBondsService';
import BondRow from './BondRow';


export const AllBonds = ({ filterDate, filterBooks }) => {
    const [bonds, setBonds] = useState(null);


    useEffect(() => {
        fetchBonds(filterDate, filterBooks)
          .then((data) => setBonds(data));
          },
       [filterDate, filterBooks]);
   // console.log(bonds)


    const tabelHead = [
        "ISIN",
        "CUSIP",
        "Issuer Name",
        "Maturity Date",
        "Coupon",
        "Bondtype",
        "Face value",
        "Currency",
        "Bond Status",
        "Show Detail"
    ]

    const bondKeys = [
        "isin",
        "cusip",
        "issuerName",
        "maturityDate",
        "coupon",
        "bondType",
        "faceValue",
        "currency",
        "bondStatus",
        "Show Detail"
        ]
    
    
    try {
    return (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {
                    tabelHead.map((item) => {
                        return <th key={item}>{item}</th>
                    })
                    }
                </tr>
            </thead>
            <tbody>
                {bonds && bonds.map((item, index) => {
                    return (
                        <BondRow index={index} item={item} book_id={filterBooks} />
                    )
                }
                )
                }
            </tbody>
        </Table>
        </>
    )
    } catch (error) {
        return (
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {
                    tabelHead.map((item) => {
                        return <th key={item}>{item}</th>
                    })
                    }
                </tr>
            </thead>
        </Table>
        )
    }
}
