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
                'Access-Control-Allow-Origin': '*'        
            },         
            body: JSON.stringify(payload),       
        });  
        const data = await response.text(); 
        console.log(data);
        return data;
    } catch (error) {       
        console.error('An error occurred:', error);       
        // Handle the error as needed     
    } 
}

// export function async saveLogin(loginData) {
    // add the url of the endpoint
    // console.log(loginData);
    // // return http.post('', loginData)
    // let result = await fetch(
    //     // add here the endpoint URL
    //     `${hostNameUrl}/auth/login`, {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: loginData
    //     }
    // ).then(data => data.json())
    // console.log(result);
    // return result  
//     const [response, setResponse] = useState("");    
//     const handleLogin = async () => {     
//         const url = 'http://localhost:8080/api/v1/auth/login';     
//         const payload = {       
//             email: 'test@email.com',       
//             password: 'myPassword',     
//         };      
//         try {       
//             const response = await fetch(url, {         
//                 method: 'POST',         
//                 headers: {           
//                     'Content-Type': 'application/json',         
//                 },         
//                 body: JSON.stringify(payload),       
//             });        
//         const data = await response.json();       
//         setResponse(data);        
        
//         } catch (error) {       
//             console.error('An error occurred:', error);       
//             // Handle the error as needed     
//         }   
//     };
// }