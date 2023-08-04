import React from 'react';
import { AllBonds } from '../AllBonds/AllBonds';
import Card from "react-bootstrap/Card";
import Filter from './Filter';


const Dasboard = () => {
  return(
    <>
    <header>
      <img id='logo-image' src="https://th.bing.com/th/id/OIP.DsY0EH8WGf2CtXcvTARfQgHaEK?pid=ImgDet&rs=1"  alt=""/>
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

export default Dasboard;