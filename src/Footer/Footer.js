import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <hr className="white-line" />
      <div className="nav-bar-area">
      <nav>
        <a className="nav-bar-item" href="/">Home</a>
        <a className="nav-bar-item" href="/resume">Resume</a>
        <a className="nav-bar-item" href="/projects">Projects</a>
        <a className="nav-bar-item" target="_blank" href="https://www.linkedin.com/in/danreardon21/">Linkedin</a>
        <a className="nav-bar-item" target="_blank" href="https://github.com/dreardon1021">Github</a>
        <a className="nav-bar-item" target="_blank" href="https://alumni.turing.io/alumni/dan-reardon">Alumni Profile</a>
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