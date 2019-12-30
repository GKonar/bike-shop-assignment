import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Shop from './Shop';

import LocalStorageManager from './LocalStorageManager';

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
    this.updateBasket = this.updateBasket.bind(this);
    this.removeFromBasket = this.removeFromBasket.bind(this);
    
    this.storage = new LocalStorageManager();
  }

  async componentDidMount() {
    const fetchedQuestions = await requests.getFaq();
    const fetchedBikes = await requests.getBikes();
    const storage = this.storage;
    
    this.setState({ 
      bikes: fetchedBikes,
      questions: fetchedQuestions,
      basketItems: storage.loadState('basketItems') || [],
      basketQuantity: storage.loadState('basketQuantity') || 0,
      basketTotal: storage.loadState('basketTotal') || 0,
    });

    // Save state
    window.addEventListener('beforeunload', () => {
      storage.saveState('basketItems', this.state.basketItems)
      storage.saveState('basketQuantity', this.state.basketQuantity)
      storage.saveState('basketTotal', this.state.basketTotal)
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
      this.updateBasket(existingItem.id, "add");
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
    let updatedBasket = basketItems.filter(item => item.id !== itemId);
    let removedItem = basketItems.find(item => item.id === itemId);
    
    this.setState((state) => ({
      basketItems: updatedBasket,
      basketTotal: state.basketTotal - (removedItem.price * removedItem.quantity),
      basketQuantity: state.basketQuantity - (1 * removedItem.quantity) 
    }));
  }

  updateBasket(itemId, action) {
    const { basketItems } = this.state;
    let itemToUpdate = basketItems.find(item => item.id === itemId);
    const updatedBasket = basketItems.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i )

    if (action === 'add') {
      const updatedBasket = basketItems.map(i => i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i )
        this.setState((state) => ({
          basketItems: updatedBasket,
          basketTotal: state.basketTotal + itemToUpdate.price,
          basketQuantity: state.basketQuantity + 1
        }));
    } else {
      this.setState((state) => ({
        basketItems: updatedBasket,
        basketTotal: state.basketTotal - itemToUpdate.price,
        basketQuantity: state.basketQuantity - 1
      }), () => {
        if ( itemToUpdate.quantity === 1 ) this.removeFromBasket(itemToUpdate.id)
      });
    }
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
            basketTotal={ basketTotal }
            basketQuantity={ basketQuantity }
            addToBasket={ this.addToBasket }
            removeFromBasket={ this.removeFromBasket }
            updateBasket={ this.updateBasket }
            />}
          />
        <Route 
          exact path="/shop" 
          render={() => 
            <Shop 
              bikes={ bikes }
              basketItems={ basketItems }
              basketTotal={ basketTotal } 
              basketQuantity={ basketQuantity }
              addToBasket={ this.addToBasket }
              removeFromBasket={ this.removeFromBasket }
              updateBasket={ this.updateBasket }
              />}
        />
        <Route 
          exact path="/customer"
          render={() => 
            <Customer 
              basketItems={ basketItems }
              basketTotal={ basketTotal }
              basketQuantity={ basketQuantity }
              addToBasket={ this.addToBasket }
              removeFromBasket={ this.removeFromBasket }
              updateBasket={ this.updateBasket }
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

