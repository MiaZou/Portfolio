import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Yelp Clone - Nomster',
    img: 'nomster1.jpg',
    description: 'A Yelp clone that integrates with the PostgreSQL database, the Google Maps API, and includes features like user comments, star ratings, image uploading (Amazon S3), and user authentication.'
  },
  {
    id: 2,
    title: 'Youtube Clone - VideosApp',
    img: 'videosReact.jpg',
    description: 'A youtube similar browser application which allows users to type the search terms on the input box, view the list of results, and click to play in the embedded player. The application focused on React and CSS. It integrates axios, youtube public free API, and semantic ui css library.'
  },
  {
    id: 3,
    title: 'Udemy Clone - Flixter',
    img: 'flixter.jpg',
    description: 'A Udemy clone online lecturing application with features of video uploading (Amazon S3), credit card payment capabilities (Stripe API), database relationships(PostgreSQL).'
  },
  {
    id: 4,
    title: 'Note',
    img: 'notes.jpg',
    description: 'A note-taking app that integrates with JavaScript, React framework, and Axios to build functions like adding notes, editing notes, deleting, and tagging notes.'
  },
  {
    id: 5,
    title: 'Todoster',
    img: 'todoster.jpg',
    description: 'A single-page to-do application features a fluid user interface by using JavaScript - allows users to rapidly add dynamic content.'
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
        <div className="ui button project-title">
          {project.title}
        </div>
      );
    });
  }


  renderProject() {
    return this.state.projects.map(project => {
      return (
        <div className="project-list" key={project.id}>
          <h4>{project.title}</h4>

          <p>
            {project.description}
          </p>
        </div>
      );
    });

  }

  render() {
    return (
      <div>
        <h1>Welcome, please select a project to view</h1>
        <div onClick={(e) => console.log(e.target)} className="ui basic buttons project-item">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default Project;