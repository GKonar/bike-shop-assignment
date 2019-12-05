import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import BikeDialog from './BikeDialog';

const styles = { 
  bike: {
    position: "relative",
    width: "250px", // 300px responsive
    height: "300px", // 350px responsive
    overflow: "hidden",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.2)" , 
    margin: "1rem",
    cursor: "pointer",
    "&:hover $basketContainer": {
      opacity: "1"
    }
  },
  name: {
  },
  price: {
    position: "absolute",
    top: "20%",
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
    width: "100%",
    height: "100%",
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
  }, 
}

class Bike extends Component {
  render() {
    const { name, description, price, images, classes } = this.props
    return (
      <div className={classes.bike}>
        <h3 className={classes.name}>{name}</h3>
        <span className={classes.price}>{price}</span>
        <div className={classes.imageContainer}>
          <BikeDialog
            name={ name }
            description={ description }
          />
          <img className={classes.image} src={images[0]} alt="redBike"/>
        </div>
        <span 
          className={classes.basketContainer}
          onClick={(e) => {
            e.stopPropagation();
            alert('add to basket');
          }}>
          Add &nbsp; 
          <ShoppingBasket 
            className={classes.basketButton}/>
        </span>

      </div>
    )
  }
}

export default withStyles(styles)(Bike);
