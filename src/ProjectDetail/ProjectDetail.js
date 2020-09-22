import React from 'react'
import projectList from '../projects-list'
import './ProjectDetail.css'
import '../App/App.css'

const ProjectDetail = props => {
  let project = projectList.find(project => project.id === props.id)

  return(
    <section className="project-detail-container">
      <h2 className="white-text">{project.name}</h2>
      <div className="project-img-description-container">
        <img classname="" src={project.image} alt={project.name}></img>
        <p className="white-text">{project.description}</p>
      </div>
      <div className="detail-buttons-container">
        <button className="details-nav-button">Github Repository</button>
        <button className="details-nav-button">Deployed Link</button>
      </div>
    </section>
  )
}

export default ProjectDetail