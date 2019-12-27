import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';

import faqImage from './assets/images/customer_1.jpeg'

const styles = {
  faq: {
    backgroundImage: `url(${faqImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    filter: "brightness(200%)"
  },
  faqList: {
    width: "60%",
    padding: "3rem",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  }
}

class Faq extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.faq}>
        <div className={classes.faqList}>
        I’ve found the sneakers I want but can’t select my size
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Faq);