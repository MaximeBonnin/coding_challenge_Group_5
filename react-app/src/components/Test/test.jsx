import React from 'react';
import { getUser } from '../../services/PetServices';
import { useEffect, useState } from 'react';
 
 
const Test = () => {
  const [response, setResponse] = useState(null);
  const [user, setUser] = useState([]);
 
  const handleLogin = async () => {
    const url = 'http://localhost:8080/api/v1/auth/login';
    const payload = {
      email: 'test@email.com',
      password: 'myPassword',
    };
 
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });
 
      const token = await response.text(); // Read the response as plain text
 
      if (response.ok) {
        setResponse(token);
        console.log(token);
        // Handle success logic
      } else {
        // Handle error logic
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error as needed
    }
  };
 
 
  console.log(user);
 
  return (
    <>
      <div>
        <button onClick={handleLogin}>Login</button>
        {response && <div>Token: {response}</div>}
      </div>
    </>
  );
}
 
export default Test;