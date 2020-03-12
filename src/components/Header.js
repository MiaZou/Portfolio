import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="ui tabular menu">
          <a href="/" className="item" >About</a>
          <a className="item" >Projects</a>
          <a href="" className="item">Tools</a>
          <a href="" className="item">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;