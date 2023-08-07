
import { hostNameUrl } from '../config/api';
import axios from "axios";
import http from '../config/api';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchBonds = () => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);

  return fetch('http://localhost:8080/api/v1/bonds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
