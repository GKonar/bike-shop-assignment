import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';

import backgroundVideo from './assets/video/Cyclist-1.mp4';

const styles = {
  video: {
    height: "100vh",
    width: '100%',
    position: "fixed",
    top: "0",
    left: "0",
    overflow: "hidden",
    zIndex: "-1",
    filter:"brightness(150%)"
  }
}

class Shop extends Component {

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Navbar/>
        

        <div className={classes.video}>
          <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
          </video>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Shop);
