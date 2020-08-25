import React from 'react';
import Skill from './Skill';

class About extends React.Component {

  render() {
    return(
      <div className="about">
        <div className="intro">
          <img src="me.jpg" alt="" className="me" />

          <h1>Mia (Mirong) Zou</h1>
          <h2>WEB DEVELOPER / REGISTERED DIETITIAN</h2>
          <hr className="grey"/>
          <p className="bio">
            I am a self-motivated full-stack developer with a passion for code writing. Currently working as a mobile developer intern for both iOS and Android using Flutter.
            
            Previously worked as a Registered Dietitian I possess enhanced problem-solving skills similar to those required for software development. I can effectively break a big problem into smaller components where I aim to fix one piece at a time efficiently. 
            
          </p>
        </div>         
        <Skill />
      </div>
    );
  }
}

export default About;

