import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import requests from './Requests';
import Customer from './Customer';
import Faq from './Faq';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItems: [],
      basketQuantity: 0,
      basketTotal: 0,
      bikes: [], 
      questions:[]
    }

    this.addToBasket = this.addToBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
  }

  async componentDidMount() {
    const fetchedQuestions = await requests.getFaq();
    const fetchedBikes = await requests.getBikes();
    this.setState({ 
      bikes: fetchedBikes,
      questions: fetchedQuestions
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
        const updatedBasket = basketItems.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i )
        this.setState((state) => ({
          basketItems: updatedBasket,
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

  removeFromBasket(itemId, removeAll) {
    const { basketItems } = this.state;
    let updatedBasket = basketItems.filter(item => item.id !== itemId);
    let removedItem = basketItems.find(item => item.id === itemId);
    
    if (removedItem.quantity > 1 && !removeAll) {
      updatedBasket = basketItems.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i )
      this.setState((state) => ({
        basketItems: updatedBasket,
        basketTotal: state.basketTotal - removedItem.price,
        basketQuantity: state.basketQuantity - 1
      }));
    } else {
      // remove all items at once
      this.setState((state) => ({
        basketItems: updatedBasket,
        basketTotal: state.basketTotal - (removedItem.price * removedItem.quantity),
        basketQuantity: state.basketQuantity - (1 * removedItem.quantity) 
      }));
    }
  }

  // updateBasket(itemId) {
  //   const { basketItems } = this.state;
  //   let removedItem = basketItems.find(item => item.id === itemId);
  //   const updatedBasket = basketItems.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i )
  //   this.setState((state) => ({
  //     basketItems: updatedBasket,
  //     basketTotal: state.basketTotal - removedItem.price,
  //     basketQuantity: state.basketQuantity - 1
  //   }));
  // }

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
            addToBasket={ this.addToBasket } //DEV
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
              addToBasket={ this.addToBasket } //DEV
            />
          }
        />
        <Route 
          exact path="/customer/faq"
          render={() => 
            <Faq faq={ questions }/>
          }
        />
      </Switch>
    )
  }
}

