import React from 'react'

import Navbar from './Navbar';
import ContactForm from './ContactForm';

import { withStyles } from '@material-ui/styles';
import styles from './styles/CustomerStyles'

function Customer(props) {
  const { basketItems, removeFromBasket, basketTotal, basketQuantity, classes, addToBasket, updateBasket } = props;
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

export default withStyles(styles)(Customer);