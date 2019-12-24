import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import welcomePageTextLogo from './assets/images/Icon.png';
import styles from './styles/WelcomePageStyles';
class WelcomePage extends Component {
  render() {
    const { classes, basketItems, removeFromBasket, basketTotal, basketQuantity } = this.props;
    return (
      <div className={classes.root}>
        <Navbar 
          basketItems={basketItems}
          removeFromBasket={removeFromBasket}
          basketTotal={basketTotal}/>
        <div className={classes.welcomeContainer}>
          <span className={classes.welcomeText}>
            <img src={`${welcomePageTextLogo}`} alt="logo"/>
            <h3 className={classes.header}>A NEW GENERATION OF VINTAGE BIKE</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
         </span>
         <Link className={classes.link} to="/shop">
            <Button className={classes.button} variant="outlined">
              EXPLORE THE SHOP &nbsp;&nbsp;&nbsp;  <Arrow/>
            </Button>
         </Link>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(WelcomePage);
