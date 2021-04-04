import { Link } from 'react-router-dom';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="ui tabular menu">
          <Link to="/" className="item" >About</Link>
          <Link to="/project" className="item" >Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
          <a href="https://drive.google.com/file/d/1LrYjZziQBRXpAVHZEEUmxtbodiacoNva/view?usp=sharing" className="item">Resume</a>
        </div>
      </div>
    );
  }
}

export default Header;