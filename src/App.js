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
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  async componentDidMount() {
    const fetchedBikes = await requests.getBikes();
    this.setState({ bikes: fetchedBikes });
  }

  addToBasket(item) {
      const { basketItems, basketTotal } = this.state;
      const existingItem = basketItems.find(i => i.id === item.id);
      let newItem = {
        ...item,
        quantity: 1,
      }
  
      if (existingItem) {
        const updatedItems = basketItems.map(i => {
          if (i.id === newItem.id) {
            return { ...i, quantity: i.quantity + 1 }
          } else {
            return i;
          }
        });
        this.setState((state) => ({
          basketItems: updatedItems,
          basketTotal: state.basketTotal + existingItem.price
        }));
      } else {
        this.setState((state) => ({ 
          basketItems: [...basketItems ,newItem ], 
          basketTotal: state.basketTotal + newItem.price
        }));
      }
  }    

  removeFromBasket(itemId) {
    const { basketItems } = this.state;
    const updatedBasket = basketItems.filter(item => item.id !== itemId)

    this.setState({ basketItems: updatedBasket });
  }

  render() {
    const { basketItems, bikes } = this.state;

    return (
      <Switch>
        <Route 
        exact path="/" 
        render={() => 
          <WelcomePage 
            basketItems={ basketItems }
            removeFromBasket={ this.removeFromBasket }
            />}
          />
        <Route 
          exact path="/shop" 
          render={() => 
            <Shop 
              bikes={ bikes }
              addToBasket={ this.addToBasket }
              basketItems={ basketItems }
              removeFromBasket={ this.removeFromBasket }/>}
        />
        {/* will need four different routes */}
      </Switch>
    )
  }
}

