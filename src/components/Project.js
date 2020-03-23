import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Forkify',
    git: 'https://github.com/MiaZou/forkify',
    heroku: 'http://73.71.152.77:667/',
    img: 'forkify.png',
    description: 'A recipe search app',
    language: 'JS, node, webpack'
  },
  {
    id: 2,
    title: 'Nomster',
    git: 'https://github.com/MiaZou/Nomster',
    heroku: 'https://nomster-mia-zou.herokuapp.com/',
    img: 'nomster.jpg',
    description: 'A Yelp clone',
    language: 'Ruby, Rails, Amazon S3'
  },
  {
    id: 3,
    title: 'VideosApp',
    git: 'https://github.com/MiaZou/videosApp',
    heroku: 'https://videos-react-app.herokuapp.com/',
    img: 'videosReact.jpg',
    description: 'A Youtube clone',
    language: 'JS, React, Youtube API'
  },
  {
    id: 4,
    title: 'Flixter',
    git: 'https://github.com/MiaZou/Flixter',
    heroku: 'https://flixter-mia-zou.herokuapp.com/',
    img: 'flixter.jpg',
    description: 'A Udemy clone',
    language: 'Ruby, Rails, Stripe API'
  },
  {
    id: 5,
    title: 'Todoster',
    git: 'https://github.com/MiaZou/todo-mz',
    heroku: 'http://todoster-mia-zou.herokuapp.com/',
    img: 'todoster.jpg',
    description: 'A to-do list',
    language: 'JavaScript'
  },
  {
    id: 6,
    title: 'Note',
    git: 'https://github.com/MiaZou/note-app-mz',
    heroku: 'https://note-app-mz.herokuapp.com/',
    img: 'note.png',
    description: 'A note-taking app',
    language: 'JavaScript, React'
  },

];


class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({ projects: projects});
  }

  renderList() {
    return this.state.projects.map(project => {
      return (
        <div className="project-item" id={`project-id-${project.id}`}>
          <div className="project-top">
            <div className="project-title">{project.title}</div>
            <div className="project-logo">
              <a href={project.git}><i class="fab fa-git-square fa-2x"></i></a>
              <a href={project.heroku}><i class="fas fa-directions fa-2x"></i></a>
            </div>
          </div>
          <div className="project-des">
            {project.description}
          </div>
          <div className="project-lan">
            {project.language}
          </div>
          <div align="bottom" className="project-img">
            <img src={project.img} alt="" ></img>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="project">
        <h3>Projects</h3>
        <p>Click icons to be redirected, :) </p>
        <div onClick={(e) => console.log(e.target)} className="project-whole">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Project;