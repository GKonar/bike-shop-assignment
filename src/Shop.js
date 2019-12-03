import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import Bike from './Bike'
import bikes from './shopProducts';

import backgroundVideo from './assets/video/Cyclist-1.mp4';

const styles = {
  root: {
    
  },
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
    width: "70%",
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
    const { classes } = this.props;
    console.log(bikes);
    return (
      <div className={classes.root}>
        <Navbar/>
        <div className={classes.productsContainer}>
          <div className={classes.products}>
            <Bike />
            <Bike />
            <Bike />
            <Bike />
            <Bike />
            <Bike />
          </div>
        </div>
        

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
