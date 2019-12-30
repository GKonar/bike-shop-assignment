import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import BasketDialog from './BasketDialog';
import MenuIcon from '@material-ui/icons/Menu';


import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from './assets/images/Logo.png';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };  

  render() {
    const { classes, basketItems, removeFromBasket, basketTotal, basketQuantity, addToBasket, updateBasket } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        {/* DESKTOP NAV */}
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
                updateBasket={ updateBasket }
              />
            </div>
          </nav>
        </div>
        
        { /* MOBILE NAV */}
        <div className={classes.mobileNav}>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon className={classes.mobileNavIcon}/>
          </Button>
          <BasketDialog 
            basketItems={ basketItems }
            removeFromBasket={ removeFromBasket }
            basketTotal={ basketTotal }
            basketQuantity={ basketQuantity }
            addToBasket={ addToBasket }
            updateBasket={ updateBasket }
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            className={classes.mobileNavMenu}
          >
            <Link to="/">
              <MenuItem className={classes.mobileNavItem} onClick={this.handleClose}>about us</MenuItem>
            </Link>
            <Link to="/work">
              <MenuItem className={classes.mobileNavItem} onClick={this.handleClose}>work</MenuItem>
            </Link>
            <Link to="/shop">
              <MenuItem className={classes.mobileNavItem} onClick={this.handleClose}>shop</MenuItem>
            </Link>
            <Link to="/customer">
              <MenuItem className={classes.mobileNavItem} onClick={this.handleClose}>customer</MenuItem>
            </Link>
          </Menu>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar);