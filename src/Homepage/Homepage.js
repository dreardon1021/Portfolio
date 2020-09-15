import React from 'react'
import './Homepage.css'
import '../App/App.css'
import headshot from '../images/Dan.jpeg'

const Homepage = () => {
  return (
    <div className="home-content-container">
      <p className="white-text summary">Hello! My name is Dan Reardon and  I am a Denver based Software Engineer. I have extensive experience leading
        teams in B2B partnerships and assessing client needs from my past as a restaurant manager.  I am passionate
        about creating front-end and user experiences. Currently seeking a Software Engineer/Developer position with a
        company to produce high-quality solutions for customers, bringing programming experience in Javascript,
        JavaScript frameworks, and Python utilizing Test-Driven Development.</p>
      <img className="headshot" src={headshot} alt="headshot"/>
    </div>
  )
}

export default Homepage