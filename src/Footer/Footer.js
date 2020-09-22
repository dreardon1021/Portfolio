import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <hr className="white-line" />
      <div className="nav-bar-area">
        <nav>
          <NavLink className="nav-bar-item" to="/">Home</NavLink>
          <NavLink className="nav-bar-item" to="/resume">Resume</NavLink>
          <NavLink className="nav-bar-item" to="/projects">Projects</NavLink>
          <a className="nav-bar-item" href="https://www.linkedin.com/in/danreardon21/">Linkedin</a>
          <a className="nav-bar-item" href="https://github.com/dreardon1021">Github</a>
          <a className="nav-bar-item" href="https://alumni.turing.io/alumni/dan-reardon">Alumni Profile</a>
        </nav>
        <div className="contact-container">
          <p className="contact-text">Email: dreardon1021@gmail.com</p>
          <p className="contact-text">Phone: 973-494-1040</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer