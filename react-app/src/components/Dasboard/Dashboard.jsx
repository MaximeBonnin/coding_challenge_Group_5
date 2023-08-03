import React from 'react';
import { getUser } from '../../services/PetServices';
import { useEffect, useState } from 'react';


const Dasboard = () => {

  const [user,setUser] = useState([]);

  useEffect(() => {         
    getUser()               
    .then(({data}) => {               
      setUser(data);               
    });       
  }, []);
  const getUserFromAPI = ()=>{}


  console.log(user)
  return(
    <>
     <h2>Dashboard</h2>
    <p>Here is user {user.email}</p>
    </>
  );
}

export default Dasboard;