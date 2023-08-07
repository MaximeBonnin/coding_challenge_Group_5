import React from 'react'
import { Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const Filter = () => {
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
        <Form.Control type="date" id="inputDate"/>
        <Form.Check label="Show only +/- 5 days" />
    </Card.Text>
      </Card.Body>     
    </Card>
    </div>

    
  )
}

export default Filter