import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Arrow from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import welcomePageImage from './assets/images/welcome-page.png';
import welcomePageTextLogo from './assets/images/Icon.png';


const styles = {
  root: {
    backgroundImage: `url(${welcomePageImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
  },
  welcomeContainer: {
    height: "calc(100% - 15vh)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  welcomeText: {
    width: "60%",
    padding: "2rem",
    paddingBottom: "3rem",
    marginBottom: "6rem",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#FFF",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "1.6",
    borderRadius: "5px"
  },
  header: {
    textAlign: "center"
  },
  link: {
    textDecoration: "none"
  },
  button: {
    padding: ".8rem 2.5rem",
    backgroundColor:  "rgba(0, 0, 0, 0.8)",
    color: "#64c29e",
    letterSpacing: "1px",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor:  "rgba(0, 0, 0, 0.8)",
    }
  }
}

class WelcomePage extends Component {
  render() {
    const { classes, basketItems } = this.props
    return (
      <div className={classes.root}>
        <Navbar basketItems={basketItems}/>
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
