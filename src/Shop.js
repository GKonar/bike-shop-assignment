import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import Bike from './Bike'
import uuid from 'uuid';

import backgroundVideo from './assets/video/Cyclist-1.mp4';
import styles from './styles/ShopStyles';

class Shop extends Component {
  render() {
    const { classes, bikes, addToBasket, basketItems, removeFromBasket, basketTotal } = this.props;
    return (
      <div className={classes.root}>
        <Navbar 
          basketItems={basketItems}
          removeFromBasket={removeFromBasket}
          basketTotal={basketTotal}/>
        <div className={classes.productsContainer}>
          <div className={classes.products}>
            {
              bikes.map(bike => {
                return (
                  <Bike 
                    addToBasket={ addToBasket }
                    bike={bike}
                    key={ uuid() }
                  />
                )
              })
            }
          </div>
        </div>
        { /* background video */ }
        <div className={classes.video}>
          <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Shop);
