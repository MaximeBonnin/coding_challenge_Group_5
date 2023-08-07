import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';
import { fetchBonds } from '../../services/allBondsService';
import BondRow from './BondRow';


export const AllBonds = ({ filterDate, filterDays }) => {
    const [bonds, setBonds] = useState(null);

    useEffect(() => {
        fetchBonds()
          .then((data) => {
            if (filterDate) {
              // Instead of directly creating a new Date from filterDate, we'll extract the year, month, and day
              let [year, month, day] = filterDate.split('-').map(str => parseInt(str, 10));
    
              data = data.filter(bond => {
                let bondDate = new Date(bond.maturityDate);
                
                // Now, directly compare the year, month, and day
                return bondDate.getFullYear() === year && 
                       bondDate.getMonth() + 1 === month && 
                       bondDate.getDate() === day;
              });
            }
            setBonds(data);
          });
      }, [filterDate, filterDays]);
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
                        <BondRow index={index} item={item} />
                    )
                }
                )
                }
            </tbody>
        </Table>
        </>
    )
}
