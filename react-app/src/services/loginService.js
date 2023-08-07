import { hostNameUrl } from '../config/api';
import { useState } from 'react';


export const saveLogin = async (loginData) => {
    const url = `${hostNameUrl}/auth/login`;     
    const payload = loginData; 
    try {       
        const response = await fetch(url, {         
            method: 'POST',         
            headers: {           
                'Content-Type': 'application/json',        
            },         
            body: JSON.stringify(payload),       
        });  
        const data = await response.text(); 
    

        
        return data;
    } catch (error) {       
        console.error('An error occurred:', error);       
        // Handle the error as needed     
    } 
}

