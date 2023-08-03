import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';

export const AllBonds = () => {

    const [allBonds, setAllBonds] = useState([])

    useEffect(() => {         
        getAllBonds()               
        .then(({data}) => {               
            setAllBonds(data);               
        });       
        }, []);
    const getAllBondsFromAPI = ()=>{}
    
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
        "issuerId",
        "maturityDate",
        "coupon",
        "bondType",
        "faceValue",
        "currency",
        "bondStatus"
        ]

    return (
        <>
        <h2>All Bonds</h2>

        <Table striped bordered hover>
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
                {allBonds.map((item, index) => {
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
