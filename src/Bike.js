import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import BikeDialog from './BikeDialog';

import styles from './styles/BikeStyles';
import defaultImage from './assets/images/default.jpg';

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
    const bikeImage = bike.images[0].src === undefined || "" ? defaultImage : bike.images[0].src;

    return (
      <div className={classes.bike}>
        <h3 className={classes.name}>{bike.bikeName}</h3>
        <span className={classes.price}>{`${bike.price}$`} </span>
        <div className={classes.imageContainer}>
          <BikeDialog
            bike={ bike }
            addToBasket={ this.handleAddToBasket }
          />
          <img 
            className={classes.image} 
            src={bikeImage} 
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
