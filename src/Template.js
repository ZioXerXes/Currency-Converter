import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Converter from './Converter.js';
import LiveRates from './LiveRates.js';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-left navbar-expand-md navbar-light">
        <Link className="navbar-brand raleway" to="/">Currency Converter</Link> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse form-inline" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto form-inline">
            <li className="nav-item active raleway">
              <Link className="nav-link" to="/">Converter</Link>
            </li>
            <li className="nav-item active raleway">
              <Link className="nav-link" to="/live-rates/">Live Rates</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const Template = () => {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  )
}

export default Template;