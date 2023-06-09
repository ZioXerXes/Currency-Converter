import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
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
