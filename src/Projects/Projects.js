import React from 'react';
import './Projects.css'
import projectsList from '../projects-list'
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="projects-container">
      {projectsList.map(project => {
        let image = Array(`/Portfolio/project-images/${project.image}`)

        return(
          <article key={project.id} className="project-card">
            <h2 className="white-text">{project.name}</h2>
            <img className="project-card-image" src={image[0]} alt={project.name} />
            <NavLink className="text-decoration-none project-link" to={`/projects/${project.id}`}><button className="project-card-button">View</button></NavLink>
          </article>
        )

      })}
    </section>
  )
}

export default Projects