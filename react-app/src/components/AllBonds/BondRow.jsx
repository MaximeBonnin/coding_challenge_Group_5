import React, { useState, useEffect } from 'react'
import { fetchTrades } from '../../services/showTradesService';
import { Form } from 'react-bootstrap'; 
import { Table } from 'react-bootstrap';

const BondRow = (props) => {
    const bondKeys = [
        "isin",
        "cusip",
        "issuerName",
        "maturityDate",
        "coupon",
        "bondType",
        "faceValue",
        "currency",
        "bondStatus"
        ]

    const tradesHead = [
        "ISIN",
        "Issuer ID",
        "Currency",
        "Status",
        "Quantity",
        "Price",
        "Order Type",
        "Trade Date",
        "Settle Date"
    ]

    const [showDetail, setShowDetail] = useState(false);
    const [trades, setTrades] = useState(null);

    const handleSwitch = () => {
        
        if (showDetail) {
            setShowDetail(false)
        } else {
            setShowDetail(true)
            fetchTrades(3, "USU02320AG12")
                .then((data) => setTrades(data))
        }
        console.log("showDetail: " + showDetail)
        console.log(trades)
    }

    const getTrades = (bookId, isin) => {
        fetchTrades(bookId, isin)
          .then((data) => setTrades(data));
          console.log(trades)
      };
      
    return (
        <>
            <tr key={props.index}>
                {
                bondKeys.map((keyValue) => {
                    if (keyValue === "maturityDate") {
                        let tempDate = new Date(props.item[keyValue])
                        let yyyy = tempDate.getFullYear();
                        let mm = tempDate.getMonth() + 1;
                        let dd = tempDate.getDate();
                        
                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        tempDate = dd + '/' + mm + '/' + yyyy;
                        
                        return (<td>{tempDate}</td>)
                    } else {
                        return (<td>{props.item[keyValue]}</td>)
                    }
                })
                }
                <td><Form.Check type='switch' id={props.index + "-switch"} onChange={handleSwitch} /></td>
            </tr>
            
            {showDetail && 
                <tr>
                <td colSpan={bondKeys.length +1} >
                    <Table striped bordered hover variant="dark">
                        <thead>
                            {
                            tradesHead.map((item) => {
                                return <th>{item}</th>
                            })
                            }
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    test
                                </td>
                                <td>
                                    test
                                </td>
                            </tr>
                            
                        </tbody>
                        
                    </Table>
                </td>
            </tr>
            }
        </>
    )
}

export default BondRow