import React, { Component } from 'react';
import projectList from '../projects-list';
import './ProjectDetail.css';
import '../App/App.css';


class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    if (this.state.project === {} || projectList.find(project => project.id === this.props.id) === undefined) {
      this.setState({project: this.state.project})
    } else {
      let project = projectList.find(project => project.id === this.props.id)
      this.setState({project: project})
    }
  }

  render() {
    return(
      <section className="project-detail-container">
        <h2 className="white-text">{this.state.project.name}</h2>
        <div className="project-img-description-container">
          <img className="project-detail-image" src={this.state.project.image} alt={this.state.project.name}></img>
          <div className="project-description-container">
            <p className="white-text project-detail-description">{this.state.project.description}</p>
            {this.state.project.userName !== '' ? (
              <div className="login-info-container">
                <p className="white-text project-detail-description">{this.state.project.userName}</p>
                <p className="white-text project-detail-description">{this.state.project.password}</p>
              </div>
            ) : (
              null
            )}
          </div>
        </div>
        <div className="detail-buttons-container">
          <a target="_blank"  rel="noopener noreferrer" href={this.state.project.githubLink} className="text-decoration-none details-anchor"><button className="details-nav-button">Github Repository</button></a>
          <a target="_blank"  rel="noopener noreferrer" href={this.state.project.deployedLink} className="text-decoration-none details-anchor"><button className="details-nav-button">Deployed Link</button></a>
        </div>
      </section>
    )
  }
}

export default ProjectDetail