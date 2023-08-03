import React from "react";
import './App.css';
import { Pets } from "./components/pets/Pets";
import Dasboard from "./components/Dasboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Login from "./components/Login/Login";

const App = () => {
  // const [token, setToken] = useState();

  //   if(!token) {
  //     return <Login setToken={setToken} />
  // }

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
