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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }, 
  contactContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "75%",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
  }
}

class Customer extends Component {
  render() {

    const { basketItems, removeFromBasket, basketTotal, basketQuantity, classes } = this.props;
    return (
      <div>
        <Navbar 
              className={ classes.customerNav }
              basketItems={ basketItems }
              removeFromBasket={ removeFromBasket }
              basketTotal={ basketTotal }
              basketQuantity={ basketQuantity }
          />
        <div className={ classes.customer }>
          <div className={classes.contactContainer}> 
            <ContactForm />
          </div>
        </div>
      </div> 
    )
  }
}

export default withStyles(styles)(Customer);