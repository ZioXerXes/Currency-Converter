import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Footer } from './Template'
import Converter from './Converter';
import LiveRates from './LiveRates';

function App() {
  return (
      <BrowserRouter>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <Routes>
        <Route path="/" exact element={<Converter />} />
        <Route path="/live-rates/" element={<LiveRates />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
