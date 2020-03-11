import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div className="about">
        <img src="me.jpg" className="me" />

        <h1>Mia (Mirong) Zou.</h1>
        <h2>PROGRAMMER/REGISTERED DIETITIAN</h2>
        <hr className="grey"/>
        <p className="bio">
          Mia Zou is a new programmer who recently decided to change her career path and becoming a programmer. As of right now, she only knows the basics of Python. However, after a few months of hard work. She will be a good web developer who is proficient in html, CSS, JS, and Ruby. 
        </p>
      </div>
    );
  }
}

export default About;