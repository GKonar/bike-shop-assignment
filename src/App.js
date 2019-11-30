import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route 
        exact path="/" 
        render={() => <WelcomePage />}
        />
        {/* will need four different routes */}
      </Switch>
    )
  }
}

