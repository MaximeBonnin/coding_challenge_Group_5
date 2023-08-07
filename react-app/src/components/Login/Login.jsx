import React from "react";
import PropTypes from 'prop-types';
import './Login.css';
import { useState } from "react";
import { saveLogin as loginUser } from '../../services/loginService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";

  
export default function Login() {
    const [email, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = await loginUser({
                email,
                password
            });
        localStorage.setItem('token', JSON.stringify(token));
        } catch (error) {
            console.error(error);
        }
        
    };
    
    return(
    <div className="login-wrapper">
    <Card style={{ width: '28rem' }}>   
    <Card.Body>
    <Card.Title >Login</Card.Title> 
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>EMail</Form.Label>
            <Form.Control type="text" onChange={e => setUserName(e.target.value)}/>
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary " type="submit">Login</Button>   
    </Form>   
    </Card.Body>     
    </Card>
    </div>  
    )
};
