import React from 'react';
import Skill from './Skill';

class About extends React.Component {
  render() {
    return(
      <div className="about">
        <div className="intro">
          <img src="me.jpg" className="me" />

          <h1>Mia (Mirong) Zou.</h1>
          <h2>WEB DEVELOPER / REGISTERED DIETITIAN</h2>
          <hr className="grey"/>
          <p className="bio">
            Mia (Mirong) Zou is a self-motivated full-stack developer with a passion for code writing. Previously worked as a Registered Dietitian which enhanced problem-solving skills similar in software development - effectively break a big problem into smaller components and aim to fix one piece at a time efficiently. Particularly, enjoy building pieces with JS and React. 
          </p>
        </div>
        
        <Skill />

      </div>
    );
  }
}

export default About;