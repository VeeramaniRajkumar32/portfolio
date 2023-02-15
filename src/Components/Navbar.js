import React, { useState } from "react";

function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none" variant="primary" onClick={handleShow}></i>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <a href="#hero" className="nav-link scrollto active">
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link scrollto">
              <i className="bx bx-server"></i> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
