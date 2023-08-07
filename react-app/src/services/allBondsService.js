
import { hostNameUrl } from '../config/api';
import axios from "axios";
import http from '../config/api';

// axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchBonds = async (filterDate, filterBooks) => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  let url = 'http://localhost:8080/api/v1/bonds'

  if (filterDate != null || filterBooks != null) {
    url += '?'
  }

  if (filterDate != null && filterDate != "") {
    url += new URLSearchParams({ maturity_date: filterDate })
  }
  
  if (filterBooks != null && filterBooks.length > 0) {
    let temp_list = [];
    for (let i = 0; i < filterBooks.length; i++) {
      let newURL = url + new URLSearchParams({ book_id: filterBooks[i]})
      console.log(newURL, filterBooks[i]);
      let tempItem = await fetch(newURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
      for (let j = 0; j < tempItem.length; j ++) {
        temp_list.push(tempItem[j]);
      }
      }
    console.log(temp_list);
    return temp_list;

    } else {
      console.log(url);
      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
        .then((response) => response.json())
        .catch((error) => console.error(error));
      }

};
