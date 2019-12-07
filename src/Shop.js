import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import Bike from './Bike'

import backgroundVideo from './assets/video/Cyclist-1.mp4';

const styles = {
  video: {
    height: "100vh",
    width: '100%',
    position: "fixed",
    top: "0",
    left: "0",
    overflow: "hidden",
    zIndex: "-1",
    filter: "brightness(150%)"
  },
  productsContainer: {
    width: "80%",
    margin: "0 auto"
  },
  products: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 auto"
  }
}

class Shop extends Component {
  render() {
    const { classes, bikes, addToBasket, basketItems } = this.props;
    return (
      <div className={classes.root}>
        <Navbar basketItems={basketItems}/>
        <div className={classes.productsContainer}>
          <div className={classes.products}>
            {
              bikes.map(bike => {
                return (
                  <Bike 
                    addToBasket={addToBasket}
                    name={bike.bikeName}
                    description={bike.description}
                    price={bike.price}
                    images={bike.images}
                    year={bike.year}
                    key={bike.year}
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
