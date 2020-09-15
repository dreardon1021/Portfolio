import React from 'react';
import './Projects.css'
import projectsList from '../projects-list'

const Projects = () => {
  return (
    <section className="projects-container">
      {projectsList.map(project => {
        return(
          <article key={project.id} className="project-card">
            <h2 className="white-text">{project.name}</h2>
            <img className="project-card-image" src={project.image} alt={project.name} />
            <a href={project.id}><button>View</button></a>
            {console.log(project.image)}
          </article>
        )
      })}
    </section>
  )
}

export default Projects