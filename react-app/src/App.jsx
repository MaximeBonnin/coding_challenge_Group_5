import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Pets } from "./components/pets/Pets";
import Dasboard from "./components/Dasboard/Dashboard";
import Preferences from "./components/Preferences/Preferences"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  <>
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Bonds</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="/dashboard">Dasboard</Nav.Link>
      <Nav.Link href="/preference">Preference</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Routes>
    <Route path="dashboard" element={Dasboard} />
    <Route path="preference" element={Preferences} />
    <Route path="/" element={Dasboard} />
  </Routes> 
  </>
};

export default App;
