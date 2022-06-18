import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div className="lan-and-tools">
        <br className="clear" />
        <h3 id="skills-and-tools">Skills &amp; Tools</h3>
        <hr className="yellow" />
        
        <div className="icons">
          <img src="languages.png" alt="" className="language-icon" style={{width: '500px'}}/>
        </div>

        <div className="icons">
          <img src="tools.png" alt="" className="icon" style={{width: '800px'}}/>
          <br className="clear" />
        </div>
        <br className="clear" />
      </div>
    );
  }
}

export default Skill;