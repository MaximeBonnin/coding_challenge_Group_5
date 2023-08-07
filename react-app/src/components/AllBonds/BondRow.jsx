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
        "Trade Type",
        "Price",
        "Quantity",
        "Status",
        "Currency",
        "Trade Date",
        "Settle Date"
    ]

    const tradesCols = [
        "tradeType",
        "unitPrice",
        "quantity",
        "tradeStatus",
        "currency",
        "tradeDate",
        "settleDate"
    ]
        

    const [showDetail, setShowDetail] = useState(false);
    const [trades, setTrades] = useState();

    const handleSwitch = async () => {
        if (showDetail) {
            setShowDetail(false)
        } else {
            const data = await fetchTrades(3, props.item.isin);
            setTrades(data);
            setShowDetail(true);
        }
    }
    

    useEffect(() => {
        const fetchTradesData = async () => {
            const data = await fetchTrades(3, props.item.isin);
            setTrades(data);
        };
        fetchTradesData();
    }, []);
    

      
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
            
            {showDetail && trades.length > 0 &&
                <tr>
                <td colSpan={bondKeys.length +1} >
                    <Table striped bordered hover variant="dark">
                        <thead>
                            {
                            tradesHead.map((headerName) => {
                                return <th>{headerName}</th>
                            })
                            }
                        </thead>
                        <tbody>
                            {trades && trades.map(trade => 
                                <tr>
                                    {
                                        tradesCols.map(key => {
                                            if (key === "settleDate" | key === "tradeDate") {
                                                let tempDate = new Date(trade[key])
                                                let yyyy = tempDate.getFullYear();
                                                let mm = tempDate.getMonth() + 1;
                                                let dd = tempDate.getDate();
                                                
                                                if (dd < 10) dd = '0' + dd;
                                                if (mm < 10) mm = '0' + mm;
                        
                                                tempDate = dd + '/' + mm + '/' + yyyy;
                                                
                                                return (<td>{tempDate}</td>)
                                            } else {
                                                return (<td>{trade[key]}</td>)
                                            }
                                            
                                        })
                                    }
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </td>
            </tr>
            }
        </>
    )
}

export default BondRow