import React, { useEffect, useState } from 'react';
import { AllBonds } from '../AllBonds/AllBonds';
import Card from "react-bootstrap/Card";
import Filter from './Filter';
import logoImage from '../../db_logo.png';

const Dashboard = () => {
  const [date, setDate] = useState(null);
  const [filterDays, setFilterDays] = useState(false);
  const [book_ids, setBookIds] = useState(null);

  return (
    <>
    <header>
      <ul>
        <li><img id='logo-image' src={logoImage}  alt="Logo Image"/></li>
        <li>Logged in as: <b> test@email.com</b></li>
      </ul>
    </header>
    <div className="content-container">
    <Filter setDate={setDate} setBookIds={setBookIds} />
    <Card>   
      <Card.Body>
      <Card.Title >Your Bonds</Card.Title> 
      <AllBonds filterDate={date} filterBooks={book_ids} />
      </Card.Body>     
    </Card>

    
      
      
    </div>

    </>
  );
};

export default Dashboard;
