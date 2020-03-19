import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Main';
import About from './About';
import Header from './Header';
import Project from './Project';
import Contact from './Contact';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
    };
  }

  renderMain = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div className="first-page">
        {this.state.clicked ?
          <div className="container">
            <Router>
              <Header />
              <Route path="/" exact component={About} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact} />
            </Router>
          </div>
          :
          <Main 
            renderMain={this.renderMain}
          />
        }

      </div>
    );
  }
}

export default App;