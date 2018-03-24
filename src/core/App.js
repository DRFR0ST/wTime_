import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../pages';
import { NavBar } from '../components';
import { WrongUrl } from '../pages/special';

class App extends Component {
  render() {
    return (
      <div className="body">
        <NavBar />
        <Router>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route component={WrongUrl} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
