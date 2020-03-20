import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  renderContact = () => {

  }

  render (){
    return (
      <div className="main">
        <img src="white.png" alt="" className="so-white"/>
        <div className="main-center">
          <p className="main-subtitle">FRONTEND</p>
          <p className="main-title">Web Developer</p>
          <p className="main-name">Mia Zou, Sunnyvale CA</p>
          <Link to="/" onClick={this.props.renderMain} className="main-button-black">Portfolio</Link>
          <Link to="/contact" onClick={this.props.renderMain} className="main-button-white">&nbsp;Contact&nbsp;</Link>
        </div>
      </div>
    );
  }
}

export default Main;