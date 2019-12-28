import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import requests from './Requests';
import Customer from './Customer';
import Faq from './Faq'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: [],
      basketQuantity: 0,
      basketTotal: 0,
      bikes: [],
      questions: [] 
    }

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  async componentDidMount() {
    const fetchedFaq = await requests.getFaq()
    const fetchedBikes = await requests.getBikes();
    this.setState({ 
      bikes: fetchedBikes,
      questions: fetchedFaq
    });
  }

  addToBasket(item) {
      const { basketItems } = this.state;
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
          basketTotal: state.basketTotal + existingItem.price,
          basketQuantity: state.basketQuantity + 1
        }));
      } else {
        this.setState((state) => ({ 
          basketItems: [...basketItems ,newItem ], 
          basketTotal: state.basketTotal + newItem.price,
          basketQuantity: state.basketQuantity + 1
        }));
      }
  }    

  removeFromBasket(itemId) {
    const { basketItems } = this.state;
    const updatedBasket = basketItems.filter(item => item.id !== itemId);
    let removedItem = basketItems.find(item => item.id === itemId);
    
    this.setState((state) => ({
      basketItems: updatedBasket,
      basketTotal: state.basketTotal - (removedItem.price * removedItem.quantity),
      basketQuantity: state.basketQuantity - (1 * removedItem.quantity) 
    }));
  }

  render() {
    const { basketItems, bikes, basketTotal, basketQuantity, questions } = this.state;

    return (
      <Switch>
        <Route 
        exact path="/" 
        render={() => 
          <WelcomePage 
            basketItems={ basketItems }
            removeFromBasket={ this.removeFromBasket }
            basketTotal={ basketTotal }
            basketQuantity={ basketQuantity }
            />}
          />
        <Route 
          exact path="/shop" 
          render={() => 
            <Shop 
              bikes={ bikes }
              addToBasket={ this.addToBasket }
              basketItems={ basketItems }
              removeFromBasket={ this.removeFromBasket }
              basketTotal={ basketTotal } 
              basketQuantity={ basketQuantity }
              />}
        />
        <Route 
            exact path="/customer"
            render={() => 
              <Customer 
                basketItems={ basketItems }
                removeFromBasket={ this.removeFromBasket }
                basketTotal={ basketTotal }
                basketQuantity={ basketQuantity }
              />
            }
        />
        <Route 
            exact path="/customer/faq"
            render={() => 
              <Faq 
                faq={ questions }
              />
            }
        />
      </Switch>
    )
  }
}

