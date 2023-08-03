import React, { useState, useEffect } from 'react'
import { getAllBonds } from '../../services/allBondsService';
import { Table } from 'react-bootstrap';

export const AllBonds = () => {

    // const [allBonds, setAllBonds] = useState([])

    // useEffect(() => {         
    //     getAllBonds()               
    //     .then(({data}) => {               
    //         setAllBonds(data);               
    //     });       
    //     }, []);
    // const getAllBondsFromAPI = ()=>{}
    
    const tabelHead = [
        "ISIN",
        "cusip",
        "Issuer ID",
        "Maturity Date",
        "Bondtype",
        "Face value",
        "Currency",
        "Bond Status"
    ]

    tabelHead.map((item) => {
        console.log(item);
    });

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
                {/* {allBonds.map((item, index) => {
                    <tr key={index}>
                        <td>{item.isin}</td>
                        ...
                    </tr>
                }
                )
                } */}
            </tbody>
        </Table>
        
        </>
    )
}
