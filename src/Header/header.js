import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <a className="text-decoration-none" href="/">
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
      </a>
    </header>
  )
}

export default Header