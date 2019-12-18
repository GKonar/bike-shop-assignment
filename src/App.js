import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import requests from './Requests';
// import bikes from './shopProducts';


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
    let includes;
    this.state.basketItems.forEach(i => {
      if(item.name === i.name) {
        includes = true;
      } else {
        includes = false;
      }      
    })
    
    if(!includes) {
      this.setState({ basketItems: [ ...this.state.basketItems, item ] });
    } else {
      let newBasket = this.state.basketItems.map(i => {
        let amount = item.amount;
        if(i.id === item.id) {
          return {...item, amount: amount + 1}       
        }
        return item;
      })
      this.setState({ basketItems: newBasket });
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

