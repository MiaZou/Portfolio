import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li>
            About
          </li>
          <li>
            Projects
          </li>
          <li>
            Skills & Tools
          </li>
          <li>
            Hire Me!
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;