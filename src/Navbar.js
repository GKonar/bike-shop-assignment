import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import BasketDialog from './BasketDialog';

import logo from './assets/images/Logo.png';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  render() {
    const { classes, basketItems, removeFromBasket, basketTotal, basketQuantity, addToBasket } = this.props;

    return (
      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <Link to="/">about us</Link>
          <Link to="/work">work</Link>
          <Link to="/"><img src={`${logo}`} alt="logo"/></Link>
          <Link to="/shop">shop</Link>
          <Link to="/customer">customer</Link>
          <div className={classes.basketContainer}>
            <BasketDialog 
              basketItems={ basketItems }
              removeFromBasket={ removeFromBasket }
              basketTotal={ basketTotal }
              basketQuantity={ basketQuantity }
              addToBasket={ addToBasket }
              />
          </div>
        </nav>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);