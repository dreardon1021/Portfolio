import React from 'react';
import projectList from '../projects-list';
import './ProjectDetail.css';
import '../App/App.css';

const ProjectDetail = props => {
  let project = projectList.find(project => project.id === props.id);

  return(
    <section className="project-detail-container">
      <h2 className="white-text">{project.name}</h2>
      <div className="project-img-description-container">
        <img className="project-detail-image" src={project.image} alt={project.name}></img>
        <div className="project-description-container">
          <p className="white-text project-detail-description">{project.description}</p>
        </div>
      </div>
      <div className="detail-buttons-container">
        <a href={project.githubLink} className="text-decoration-none details-anchor"><button className="details-nav-button">Github Repository</button></a>
        <a href={project.deployedLink} className="text-decoration-none details-anchor"><button className="details-nav-button">Deployed Link</button></a>
      </div>
    </section>
  )
}

export default ProjectDetail