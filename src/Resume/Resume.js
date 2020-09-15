import React from 'react'
import './Resume.css'
import '../App/App.css'
import resume from '../images/resume.pdf'

const Resume = () => {
  return(
    <embed className='resume-img' src={resume} alt="resume"/>
  )
}

export default Resume