import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div className="lan-and-tools">
        <br className="clear" />
        <h3 id="skills-and-tools">Skills &amp; Tools</h3>
        <hr className="yellow" />
        
        <div className="icons">
          <img src="skill.png" className="skill-icon" />
        </div>

        <div className="icons">
          <img src="github.png" className="icon" />
          <img src="trello.png" className="icon" />
          <img src="slack.png" className="icon" />
          <img src="heroku.jpg" className="icon" />

          <br className="clear" />
        </div>
        <br className="clear" />
      </div>
    );
  }
}

export default Skill;