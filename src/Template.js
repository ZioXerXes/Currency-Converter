import React from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar = () => {
  return (  
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Currency Converter</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active nav-page" aria-current="page" href="/">Converter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-page" href="/live-rates/">Live Rates</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

const Footer = () => {
  return (
    <div id="footer" className="container fixed-bottom d-flex align-items-center justify-content-end">
      <div className="row">
        <div className="col-7 bio">
          <p>App created by John Paul Schmidt using React.js, API, Bootstrap, JavaScript, CSS, and HTML</p>
        </div>
        <div className="col-5 justify-contents-center">
          <button className="social-button">
            <a href="https://johnpaulschmidt.netlify.app/" target="#" className="social-link">
              <div>
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </a>
          </button>
          <button className="social-button">
            <a href="https://www.linkedin.com/in/john-paul-schmidt-b1306941" target="#" className="social-link">
              <div>
                <FontAwesomeIcon icon={faLinkedin}/>
              </div>
            </a>
          </button>
          <button className="social-button">
            <a href="https://www.github.com/ZioXerXes" target="#" className="social-link">
              <div>
              <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export { Navbar, Footer };