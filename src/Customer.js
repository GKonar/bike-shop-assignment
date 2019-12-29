import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles';
import customerPageImage from './assets/images/customer.jpeg';

import Navbar from './Navbar';
import ContactForm from './ContactForm';

const styles = {
  customer: {
    backgroundImage: `url(${customerPageImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  contactContainer: {
    position: "relative",
    top: "10%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "60%",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
  }
}

class Customer extends Component {
  render() {

    const { basketItems, removeFromBasket, basketTotal, basketQuantity, classes, addToBasket } = this.props;
    return (
        <div className={ classes.customer }>
          <Navbar 
            basketItems={ basketItems }
            removeFromBasket={ removeFromBasket }
            basketTotal={ basketTotal }
            basketQuantity={ basketQuantity }
            addToBasket={ addToBasket }
          /> 
          <div className={classes.contactContainer}> 
            <ContactForm />
          </div>
        </div>
    )
  }
}

export default withStyles(styles)(Customer);