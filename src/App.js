import React from 'react';
import './App.css';
import './main.css'
import Router from './Router'
import NavBar from './containers/NavBar';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
