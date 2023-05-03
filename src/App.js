import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Template from './Template';
import Converter from './Converter';
import LiveRates from './LiveRates';

function App() {
  return (
      <BrowserRouter>
      <Template />
      <Routes>
        <Route path="/" exact element={<Converter />} />
        <Route path="/live-rates/" element={<LiveRates />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
