import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import VintageOliva_1 from './assets/images/fourth-model_left-image.png';
import VintageOliva_2 from './assets/images/fourth-model_right-image.png';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';


const styles = { 
  bike: {
    position: "relative",
    minWidth: "300px",
    height: "350px",
    overflow: "hidden",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.2)" , 
    margin: "1rem",
    "&:hover $basketContainer": {
      opacity: "1"
    }
  },
  name: {
  },
  price: {
    position: "absolute",
    top: "17%",
    right: "0",
    fontSize: "2rem",
    letterSpacing: "1px",
    fontWeight: 500,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: ".5rem",
    color: "#FFF"
  },
  imageContainer: {
    width: "300px"
  },
  image: {
    width: "100%"
  },
  basketContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: ".5rem 1rem",
    backgroundColor: "#64C29E",
    transition: ".5s",
    opacity: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  basketButton: {
    fontSize: "2rem"
  }
}

class Bike extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bike}>
        <h3 className={classes.name}>Vintage Oliva</h3>
        <span className={classes.price}>999$</span>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={VintageOliva_1} alt="redBike"/>
        </div>
        <span 
          className={classes.basketContainer}
          onClick={() => console.log('Add')}>
          Add &nbsp; 
          <ShoppingBasket 
          className={classes.basketButton}/>
        </span>

      </div>
    )
  }
}

export default withStyles(styles)(Bike);
