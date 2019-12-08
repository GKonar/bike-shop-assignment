import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import BasketDialog from './BasketDialog';

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
      color: "#64C29E",
      cursor: "pointer"
    }
  },
}

class Navbar extends Component {
  render() {
    const { classes, basketItems } = this.props;

    return (
      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <Link to="/">about us</Link>
          <Link to="/work">work</Link>
          <Link to="/"><img src={`${logo}`} alt="logo"/></Link>
          <Link to="/shop">shop</Link>
          <Link to="/customer">customer</Link>
          <div className={classes.basketContainer}>
            <BasketDialog basketItems={basketItems}/>
          </div>
        </nav>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);