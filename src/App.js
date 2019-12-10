import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import bikes from './shopProducts';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: []
    }

    this.addToBasket = this.addToBasket.bind(this);
  }

  async componentDidMount() {
    const fetchedBikes = await requests.getBikes();
    this.setState({ bikes: fetchedBikes });
    console.log('BIKES: ',fetchedBikes);
  }

  addToBasket(item) {
    this.setState({ basketItems: [ ...this.state.basketItems, item ] })
  }

  render() {
    const { basketItems } = this.state;

    return (
      <Switch>
        <Route 
        exact path="/" 
        render={() => 
          <WelcomePage 
            basketItems={ basketItems }/>}
          />
        <Route 
          exact path="/shop" 
          render={() => 
            <Shop 
              bikes={ bikes }
              addToBasket={ this.addToBasket }
              basketItems={ basketItems }/>}
        />
        {/* will need four different routes */}
      </Switch>
    )
  }
}

