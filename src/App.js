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
    const { basketItems } = this.state;
    let newItem = {
      ...item,
      amount: 1,
    }
    
    this.setState({ basketItems: [...basketItems, newItem] });
    
    // if( basketItems.length === 0 ) {
    //   this.setState({ basketItems: [ ...basketItems, newItem ] });
    // } else {
    //   const updatedItems = basketItems.map(i => {
    //     if (i.id === newItem.id) {
    //       return { ...i, amount: i.amount + 1 };
    //     }
    //     console.log('outside');
    //     return newItem;
    //   });
    //   this.setState({ basketItems: updatedItems });
    // }
  }

  removeFromBasket(itemId) {
    console.log('yay hellos');
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

