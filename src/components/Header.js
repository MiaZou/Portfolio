import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="nav-header">
          <li>
            <Link to="/" >About</Link>
          </li>
          <li>
            <Link to="/project" >Project</Link>
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