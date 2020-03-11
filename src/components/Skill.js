import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div>
        <h3 id="skills-and-tools">Skills &amp; Tools</h3>
        <hr class="yellow" />
        <p class="skills-and-tools">
          Ken has developed proficiency and expertise in the following programming languages and comfort with the following tools.
        </p>

        <div class="icons">
          <img src="github.png" className="icon" />
          <img src="trello.png" className="icon" />
          <img src="slack.png" className="icon" />
          <img src="heroku.jpg" className="icon" />

          <br class="clear" />
          <img src="skills.png" class="icon" />
        </div>
      </div>
    );
  }
}

export default Skill;