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

  handleAddToBasket(e, bike) {
    this.props.addToBasket(bike)
    e.stopPropagation();
  }

  render() {
    const { bike, classes } = this.props
    return (
      <div className={classes.bike}>
        <h3 className={classes.name}>{bike.name}</h3>
        <span className={classes.price}>{bike.price}</span>
        <div className={classes.imageContainer}>
          <BikeDialog
            bike={ bike }
            addToBasket={ this.handleAddToBasket }
          />
          <img 
            className={classes.image} 
            src={bike.images[0].src} 
            alt="redBike"/>
        </div>
        <span 
          className={classes.basketContainer}
          onClick={(e) => this.handleAddToBasket(e, bike)}>
          Add &nbsp; 
          <ShoppingBasket 
            className={classes.basketButton}/>
        </span>

      </div>
    )
  }
}

export default withStyles(styles)(Bike);
