import React from 'react'
import logo from '../images/Logo.png';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img id="header-image" src={logo} alt="logo"/>
        <p id="header-text"></p>
      </div>
      <div className="contact-container">
        <p className="contact-text">Email: dreardon1021@gmail.com</p>
        <p className="contact-text">Phone: 973-494-1040</p>
      </div>
    </header>
  )
}

export default Header