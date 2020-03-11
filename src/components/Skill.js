import React from 'react';

class Skill extends React.Component {
  render() {
    return (
      <div>
        <br className="clear" />
        <h3 id="skills-and-tools">Languages</h3>
        <hr className="yellow" />
        <ul className="skills-and-tools">
          <li>Ruby</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Rails</li>
          <li>HTML5</li>
          <li>CSS</li>

        </ul>

        <br className="clear" />
        <h3 id="skills-and-tools">Software Tools</h3>
        <hr className="yellow" />
        <ul className="tools">
          <li>Linux</li>
          <li>Darwin</li>
          <li>Vagrant&VirtualBox</li>
          <li>Webpack</li>
          <li>Axios</li>
          <li>Bootstrap</li>
          <li>AWS</li>
          <li>PostgreSQL</li>
          <li>Google Maps API</li>
          <li>Stripe API</li>
          <li>Google Oauth API</li>
          <li>REST API</li>
        </ul>


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