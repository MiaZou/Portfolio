import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div className="lan-and-tools">
        <br className="clear" />
        <h3 id="skills-and-tools">Skills &amp; Tools</h3>
        <hr className="yellow" />
        
        <div className="icons">
          <img src="skill.png" alt="" className="skill-icon" />
        </div>

        <div className="icons">
          <img src="github.png" alt="" className="icon" />
          <img src="trello.png" alt="" className="icon" />
          <img src="slack.png" alt="" className="icon" />
          <img src="heroku.jpg" alt="" className="icon" />

          <br className="clear" />
        </div>
        <br className="clear" />
      </div>
    );
  }
}

export default Skill;