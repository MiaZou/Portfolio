import React from 'react';

const projects = [
  {
    title: 'Yelp Clone - Nomster',
    img: 'nomster1.jpg',
    description: 'A Yelp clone that integrates with the PostgreSQL database, the Google Maps API, and includes features like user comments, star ratings, image uploading (Amazon S3), and user authentication.'
  },
  {
    title: 'Youtube Clone - VideosApp',
    img: 'videosReact.jpg',
    description: 'A youtube similar browser application which allows users to type the search terms on the input box, view the list of results, and click to play in the embedded player. The application focused on React and CSS. It integrates axios, youtube public free API, and semantic ui css library.'
  },
  {
    title: 'Udemy Clone - Flixter',
    img: 'flixter.jpg',
    description: 'A Udemy clone online lecturing application with features of video uploading (Amazon S3), credit card payment capabilities (Stripe API), database relationships(PostgreSQL).'
  },
  {
    title: 'Note',
    img: 'notes.jpg',
    description: 'A note-taking app that integrates with JavaScript, React framework, and Axios to build functions like adding notes, editing notes, deleting, and tagging notes.'
  },
  {
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


  renderProject() {
    return this.state.projects.map(project => {
      return (
        <div className="box" key={project.title}>
          <h4>{project.title}</h4>
          <img src={project.img} className="full-width" />
          <p>
            {project.description}
            }
          </p>
        </div>
      );
    });

  }

  render() {
    return (
      <div className="project">
        {this.renderProject()}
      </div>
    );
  }
}

export default Project;