import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';
import { fetchBonds } from '../../services/allBondsService';

import BondRow from './BondRow';

export const AllBonds = () => {
    const [bonds, setBonds] = useState(null);

    useEffect(() => {
      fetchBonds()
        .then((data) => setBonds(data));
    }, []);
    //console.log(bonds)
    const tabelHead = [
        "ISIN",
        "CUSIP",
        "Issuer ID",
        "Maturity Date",
        "Coupon",
        "Bondtype",
        "Face value",
        "Currency",
        "Bond Status",
        "Show Detail"
    ]

    return (
        <>

        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {
                    tabelHead.map((item) => {
                        return <th>{item}</th>
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
