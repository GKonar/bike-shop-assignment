import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

import logo from './assets/images/Logo.png';

const styles = {
  navContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "100"
  },
  nav: {
    position: "relative",
    left: "10px",
    fontFamily: 'Roboto',
    margin: "0 auto",
    width: "60%",
    height: "15vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    "& a": {
      fontSize: "1rem",
      fontWeight: "500",
      letterSpacing: "1px",
      textDecoration: "none",
      color: "#FFF",
      textTransform: "uppercase",
      transition: ".4s",
      "&:hover": {
        color: "#64C29E" // move to constans
      }
    }
  },
  basketContainer: {
    position: "absolute",
    right: "-15%"
  },
  basket: {
    fontSize: "2.5rem",
    transition: ".4s",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#64C29E"
    }
  },
  itemsNumber: {
    margin: ".2rem",
    color: "#FFF"
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numOfItems: 0,
    }
  }

  render() {
    const { classes } = this.props;
    const { numOfItems } = this.state

    return (
      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <Link to="/">about us</Link>
          <Link to="/work">work</Link>
          <Link to="/"><img src={`${logo}`} alt="logo"/></Link>
          <Link to="/shop">shop</Link>
          <Link to="/customer">customer</Link>
          <div className={classes.basketContainer}>
            <span className={classes.itemsNumber}>{numOfItems}</span>
            <ShoppingBasket 
            className={classes.basket}
            onClick={() => console.log('Open basket')}/>
          </div>
        </nav>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);