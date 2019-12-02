import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route 
        exact path="/" 
        render={() => <WelcomePage />}
        />
        <Route 
        exact path="/shop" 
        render={() => <Shop />}
        />
        {/* will need four different routes */}
      </Switch>
    )
  }
}

