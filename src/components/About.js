import React from 'react';
import Skill from './Skill';

class About extends React.Component {

  render() {
    return(
      <div className="about">
        <div className="intro">
          <img src="me.jpg" alt="" className="me" />

          <h1>Mia (Mirong) Zou</h1>
          <h2>SOFTWARE ENGINEER</h2>
          <hr className="grey"/>
          <p className="bio">
            I am a student at Pennsylvania State University purchsing Master's degree in Software Engineering.
            I interned at Amazon and Coursera where I focused on front-end projects. I also worked on mobile development and wrote backend API endpoints.
          </p>
        </div>         
        <Skill />
      </div>
    );
  }
}

export default About;

