import React from 'react';
import { AllBonds } from '../AllBonds/AllBonds';
import Card from "react-bootstrap/Card";
import Filter from './Filter';
import logoImage from '../../db_logo.png';




const Dasboard = () => {
  return(
    <>
    <header>
      <ul>
        <li><img id='logo-image' src={logoImage}  alt="Logo Image"/></li>
        <li>Logged in as: <b> test@email.com</b></li>
      </ul>
    </header>
    <div className="content-container">
    <Filter />
    <Card>   
      <Card.Body>
      <Card.Title >Your Bonds</Card.Title> 
      <Card.Text><AllBonds/></Card.Text>  
      </Card.Body>     
    </Card>

    
      
      
    </div>
    </>
  );
}

export default Dashboard;