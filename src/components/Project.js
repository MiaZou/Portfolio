import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Nomster',
    git: 'https://github.com/MiaZou/Nomster',
    heroku: 'https://nomster-mia-zou.herokuapp.com/',
    img: 'nomster.jpg',
    description: 'A Yelp clone'
  },
  {
    id: 2,
    title: 'VideosApp',
    git: 'https://github.com/MiaZou/videosApp',
    heroku: 'https://videos-react-app.herokuapp.com/',
    img: 'videosReact.jpg',
    description: 'A Youtube clone'
  },
  {
    id: 3,
    title: 'Flixter',
    git: 'https://github.com/MiaZou/Flixter',
    heroku: 'https://flixter-mia-zou.herokuapp.com/',
    img: 'flixter.jpg',
    description: 'A Udemy clone'
  },
  {
    id: 4,
    title: 'Todoster',
    git: 'https://github.com/MiaZou/todo-mz',
    heroku: 'http://todoster-mia-zou.herokuapp.com/',
    img: 'todoster.jpg',
    description: 'A to-do list'
  }
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