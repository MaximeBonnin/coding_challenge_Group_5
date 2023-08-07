import React from 'react'
import { Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Filter = ({ setDate, setFilterDays }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFilterDaysChecked, setIsFilterDaysChecked] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setDate(event.target.value); // pass it to parent
  };

  const handleCheckboxChange = (event) => {
    setIsFilterDaysChecked(event.target.checked);
    setFilterDays(event.target.checked); // pass it to parent
  };

  return (
    <div className="filter">
        <Card>   
      <Card.Body>
      <Card.Title >Select your books</Card.Title>
      
      <Card.Text>
        <Form>
            <ul>
                <Form.Check inline label="1" />
                <Form.Check inline label="2" />
                <Form.Check inline label="3" />
                <Form.Check inline label="4" />
                <Form.Check inline label="5" />
                <Form.Check inline label="6" />
                <Form.Check inline label="7" />
            </ul>
        </Form>
        </Card.Text>
      </Card.Body>     
    </Card>
    <Card>   
      <Card.Body>
      <Card.Title >Date</Card.Title>
      
     <Card.Text>
        <Form.Control 
          type="date" 
          id="inputDate" 
          value={selectedDate} 
          onChange={handleDateChange}
        />
        <Form.Check 
          label="Show only +/- 5 days" 
          checked={isFilterDaysChecked}
          onChange={handleCheckboxChange}
        />
    </Card.Text>
    
      </Card.Body>     
    </Card>
    
    </div>

    
  )
}

export default Filter