import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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

