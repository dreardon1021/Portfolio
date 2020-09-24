import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink className="text-decoration-none" to="/">
        <div className="logo-container">
          <div className="DR-logo">
            <p className="logo-D header-logo-text">D</p>
            <p className="logo-R header-logo-text">R</p>
          </div>
          <div className="header-name-title-container">
            <p className="header-name-title">Dan Reardon</p>
            <p className="header-name-title">Software Engineer</p>
          </div>
        </div>
      </NavLink>
    </header>
  )
}

export default Header