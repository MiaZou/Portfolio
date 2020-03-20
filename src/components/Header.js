import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="ui tabular menu">
          <a href="/" className="item" >About</a>
          <a href="/project" className="item" >Projects</a>
          <a href="/contact" className="item">Contact</a>
          <a href="/resume" className="item">Resume</a>
        </div>
      </div>
    );
  }
}

export default Header;