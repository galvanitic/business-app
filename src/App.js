import React from 'react';
import './App.css';
import Router from './Router'
import NavBar from './components/NavBar';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
