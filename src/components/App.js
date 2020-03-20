import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Header from './Header';
import Project from './Project';
import Contact from './Contact';
import Main from './Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  };

  renderMain = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div className="container">
          <Router>
          {this.state.clicked ?
              <div>
                <Header />
                <Route path="/" exact component={About} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
              </div>
          :
          <Main 
            renderMain={this.renderMain}
          />
          }
          </Router>
      </div>
    );
  }
}

export default App;