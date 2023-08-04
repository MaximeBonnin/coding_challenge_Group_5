import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import { Pets } from "./components/pets/Pets";
import Dasboard from "./components/Dasboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Login from "./components/Login/Login";
import Test from './components/Test/test';
import useToken from './components/App/useToken';


const App = () => {
  // uncomment when the token authentification is workling
  const { token, setToken } = useToken()
  console.log(token);

  if(!token) {
    return <Login setToken={setToken} />
  }

  if(!token) {
      return <Login/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dasboard/>}/>
        <Route path="preferences" element={<Preferences/>}/>
        <Route path="/" element={<Dasboard/>}/>
      </Routes>
    </BrowserRouter>
  
  )
};

export default App;
