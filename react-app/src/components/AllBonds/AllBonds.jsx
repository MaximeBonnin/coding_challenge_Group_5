import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';
import { fetchBonds } from '../../services/allBondsService';

export const AllBonds = () => {
    const [bonds, setBonds] = useState(null);

    useEffect(() => {
      fetchBonds()
        .then((data) => setBonds(data));
    }, []);
    console.log(bonds)
    const tabelHead = [
        "ISIN",
        "cusip",
        "Issuer ID",
        "Maturity Date",
        "Coupon",
        "Bondtype",
        "Face value",
        "Currency",
        "Bond Status"
    ]

    const bondKeys = [
        "isin",
        "cusip",
        "issuer_name",
        "maturityDate",
        "coupon",
        "bondType",
        "faceValue",
        "currency",
        "bondStatus"
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
                    <tr key={index}>
                        {
                        bondKeys.map((keyValue) => {
                            if (keyValue == "maturityDate") {
                                let tempDate = new Date(item[keyValue])
                                let yyyy = tempDate.getFullYear();
                                let mm = tempDate.getMonth() + 1;
                                let dd = tempDate.getDate();
                                
                                if (dd < 10) dd = '0' + dd;
                                if (mm < 10) mm = '0' + mm;

                                tempDate = dd + '/' + mm + '/' + yyyy;
                                
                                return (<td>{tempDate}</td>)
                            } else {
                                return (<td>{item[keyValue]}</td>)
                            }
                        })
                        }
                    </tr>
                    )
                }
                )
                }
            </tbody>
        </Table>
        </>
    )
}
