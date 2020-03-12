import React from 'react';


class Main extends React.Component {
  render (){
    return (
      <div className="main">
        <img src="white.png" alt="" className="so-white"/>
        <div className="main-center">
          <p className="main-subtitle">FRONTEND</p>
          <p className="main-title">Web Developer</p>
          <p className="main-name">Mia Zou, Sunnyvale CA</p>
          <button onClick={this.props.renderMain} className="main-button-black">Portfolio</button>
          <button onClick={this.props.renderMain} className="main-button-white">&nbsp;Contact&nbsp;</button>
        </div>
      </div>
    );
  }
}

export default Main;