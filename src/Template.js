import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-left navbar-expand-md navbar-light">
        <Link className="navbar-brand raleway" to="/">   Currency Converter</Link> 
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

const Footer = () => {
  return (
    <div id="footer" className="container fixed-bottom">
      <div className="row">
        <div className="col-8">
          <p>App created by John Paul Schmidt using React.js, API, Bootstrap, JavaScript, CSS, and HTML</p>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <button>
                <a href="https://johnpaulschmidt.netlify.app/" target="#">
                  <div>
                    <h2><i class="bi bi-globe"></i></h2>
                    <p>My Website</p>
                  </div>
                </a>
              </button>
            </div>
            <div className="col-4">
              <button>
                <a href="https://www.linkedin.com/in/john-paul-schmidt-b1306941" target="#">
                  <div>
                    <h2><i class="bi bi-linkedin"></i></h2>
                    <p>LinkedIn</p>
                  </div>
                </a>
              </button>
            </div>
            <div className="col-4">
              <button>
                <a href="https://www.github.com/ZioXerXes" target="#">
                  <div>
                    <h2><i class="bi bi-github"></i></h2>
                    <p>GitHub</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar, Footer };