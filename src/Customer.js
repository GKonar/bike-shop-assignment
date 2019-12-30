import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles';
import customerPageImage from './assets/images/customer.jpeg';

import Navbar from './Navbar';
import ContactForm from './ContactForm';

import styles from './styles/CustomerStyles'

class Customer extends Component {
  render() {

    const { basketItems, removeFromBasket, basketTotal, basketQuantity, classes, addToBasket, updateBasket } = this.props;
    return (
        <div className={ classes.customer }>
          <Navbar 
            basketItems={ basketItems }
            removeFromBasket={ removeFromBasket }
            basketTotal={ basketTotal }
            basketQuantity={ basketQuantity }
            addToBasket={ addToBasket }
            updateBasket={ updateBasket }
          /> 
          <div className={classes.contactContainer}> 
            <ContactForm />
          </div>
        </div>
    )
  }
}

export default withStyles(styles)(Customer);