import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="ui tabular menu">
          <Link to="/" className="item" >About</Link>
          <Link to="/project" className="item" >Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
          <a href="https://drive.google.com/open?id=1Lz97KTW2ASuA5kRQeBPJlDw0PxDlA_0b" className="item">Resume</a>
        </div>
      </div>
    );
  }
}

export default Header;