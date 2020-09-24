import React from 'react'
import './Homepage.css'
import '../App/App.css'
import headshot from '../images/Dan.jpeg'

const Homepage = () => {
  return (
    <div className="home-content-container">
      <p className="white-text summary">Hello!  My name is Dan Reardon, a Denver based
      Software Engineer.  I have extensive experience leading teams in B2B partnerships and
      assessing client needs from past management positions. I am passionate about creating
      dynamic front-end user experiences and currently seeking a Software Engineer/Developer
      position with an organization focused on client solutions. My Programming experience
      includes JavaScript, React, Node, and Python, utilizing Test-Driven Development.</p>
      <img className="headshot" src={headshot} alt="headshot"/>
    </div>
  )
}

export default Homepage