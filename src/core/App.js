import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, matchPath } from 'react-router-dom';

import { Home } from './pages';
import { WrongUrl } from './pages/special';

class App extends Component {
  render() {
    return (
    <Router>
		<div className="body">
	        <Switch>
	            <Route path="/" exact component={Home} />

	            <Route component={WrongUrl} />
	        </Switch>
		</div>
    </Router>
    );
  }
}

export default App;
