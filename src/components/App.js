import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Header from './Header';
import Project from './Project';
import Skill from './Skill';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route path="/" exact component={About} />
          <Route path="/project" component={Project} />
          <Route path="/other" component={Skill} />
        </Router>
      </div>
    );
  }
}

export default App;