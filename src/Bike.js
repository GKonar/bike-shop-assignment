import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import uuid from 'uuid';

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
  constructor(props) {
    super(props);

    this.handleAddToBasket = this.handleAddToBasket.bind(this);
  }

  handleAddToBasket(e, bikeName, bikePrice, bikeImages) {
    const newBike = {
      name: bikeName,
      price: bikePrice,
      images: bikeImages,
      id: uuid(),
      
      // add Number
      amount: 1
    }

    this.props.addToBasket(newBike)
    e.stopPropagation();
  }

  render() {
    const { name, description, price, images, year, classes } = this.props
    return (
      <div className={classes.bike}>
        <h3 className={classes.name}>{name}</h3>
        <span className={classes.price}>{price}</span>
        <div className={classes.imageContainer}>
          <BikeDialog
            name={ name }
            description={ description }
            images={ images }
            price={ price }
            year={ year }
            addToBasket={ this.handleAddToBasket }
          />
          <img 
            className={classes.image} 
            src={images[0].src} 
            alt="redBike"/>
        </div>
        <span 
          className={classes.basketContainer}
          onClick={(e) => this.handleAddToBasket(e, name, price, images)}>
          Add &nbsp; 
          <ShoppingBasket 
            className={classes.basketButton}/>
        </span>

      </div>
    )
  }
}

export default withStyles(styles)(Bike);
