import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import requests from './Requests';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: [],
      bikes: []
    }

    this.addToBasket = this.addToBasket.bind(this);
  }

  async componentDidMount() {
    const fetchedBikes = await requests.getBikes();
    this.setState({ bikes: fetchedBikes });
  }

  addToBasket(item) {
    const { basketItems } = this.state;
    let newItem = {
      ...item,
      amount: 1,
    }

    if(basketItems.length === 0 ) {
      this.setState({ basketItems: [...basketItems, newItem] });
    } else {
      const updatedItems = basketItems.map(i => {
        if (i.id === newItem.id) {
          return { ...i, amount: i.amount + 1 };
        }
        return newItem;
      });
      this.setState({ basketItems: updatedItems });
    }
  }

  render() {
    const { basketItems, bikes } = this.state;

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

