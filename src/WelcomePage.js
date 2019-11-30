import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

import welcomePageImage from './assets/images/welcome-page.png';

const styles = {
  root: {
    backgroundImage: `url(${welcomePageImage})`,
    backgroundPosition: "center",
    width: "100%",
    height: "100vh"
  },
  nav: {

  }
}

class WelcomePage extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          
        </nav>
      </div>
    )
  }
}

export default withStyles(styles)(WelcomePage);
