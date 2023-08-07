import React from 'react'
import { Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Filter = ({ setDate, setBookIds }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFilterDaysChecked, setIsFilterDaysChecked] = useState(false);
  const [bookIds, setSelectedBookIds] = useState([]);
  const [selectedBookIds, setSelectedBookArray] = useState([false, false, false, false, false, false, false])

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setDate(event.target.value); // pass it to parent
    console.log(event.target.value);
  };

  const handelBookCheck = (event) => {
    var temp = selectedBookIds;
    temp[parseInt(event.target.name) - 1] = !(temp[parseInt(event.target.name) - 1]);
    setSelectedBookArray(temp);
    //setSelectedBookIds(selectedBookIds);
    let tempArray = [];
    for (var i = 0; i < 7; i++) {
      if (selectedBookIds[i]) {
        tempArray.push(i+1);
      }
    }
    console.log(tempArray);
    setBookIds(tempArray);
    // setBookIds(event.target.name);
  };

  return (
    <div className="filter">
        <Card>   
      <Card.Body>
      <Card.Title >Select your books</Card.Title>
      
      <Card.Text>
        <Form>
            <ul id="FormCheck">
                <Form.Check name="1" inline label="1" onChange={handelBookCheck} />
                <Form.Check name="2" inline label="2" onChange={handelBookCheck} />
                <Form.Check name="3" inline label="3" onChange={handelBookCheck} />
                <Form.Check name="4" inline label="4" onChange={handelBookCheck} />
                <Form.Check name="5" inline label="5" onChange={handelBookCheck} />
                <Form.Check name="6" inline label="6" onChange={handelBookCheck} />
                <Form.Check name="7" inline label="7" onChange={handelBookCheck} />
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
    </Card.Text>
    
      </Card.Body>     
    </Card>
    
    </div>

    
  )
}

export default Filter