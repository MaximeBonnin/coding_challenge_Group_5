import useToken from '../components/App/useToken';
import { hostNameUrl } from '../config/api';
import axios from "axios";
import http from '../config/api';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const getAllBonds = async (token) => {

    // const bonds = axios.get(`${hostNameUrl}/bonds`);
    // const bonds = await fetch(`${hostNameUrl}/bonds`, {
    //     method: 'GET',
    //     mode: 'cors',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "Access-Control-Allow-Methods": "POST, GET",
    //       'Access-Control-Allow-Origin': '*',
    //       Authorization: `Bearer ${token}`
    //     }
    //   });

    token = token['token']['token'];
    const config = {
      headers: { 
        'Authorization': `${token}`, 
        'Access-Control-Allow-Origin': '*',
        'withCredentials': false
      } ,
      params: {
        access_token: token
      }
    };
    console.log(config)

    const bonds = axios.get(`${hostNameUrl}/bonds`, config)
 
    return bonds;
};
