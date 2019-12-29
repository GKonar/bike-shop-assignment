import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { minTwoDigits } from './helpers';

import faqImage from './assets/images/black_white.jpeg'

const styles = {
  faq: {
    backgroundImage: `url(${faqImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    filter: "brightness(100%)",
    position:"relative"
  },
  faqHeader: {
    color: "#64c29e",
    width: "100%",
    marginLeft: "2rem",
  },
  faqList: {
    width: "60%",
    height: "100%",
    margin: "0 auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
    overflow: "scroll",
  },
  faqListItem: {
    color: "#fff",
    width: "40%",
    padding: "0 1rem",
    fontSize: ".9rem"
  },
  faqListItemHeader: {
    color: "#64c29e"
  },
  faqQuestion: {
    
  },
  faqGoBack: {
    position: "fixed",
    left: "5%",
    top: "5%",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: 400,
    padding: "1rem 2rem",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    transition: ".2s",
    letterSpacing: "1px",
    "&:hover" : {
      color: "#64c29e"
    }
  }
}

class Faq extends Component {
  render() {
    const { classes, faq } = this.props;

    return (
      <div className={ classes.faq }>
        <Link to="/customer" className={ classes.faqGoBack }>BACK</Link>
        <div className={ classes.faqList }>
        <h1 className={ classes.faqHeader }>FAQ</h1>
          {
            faq.map((q, i) => {
              return (
                <div 
                  className={classes.faqListItem}
                  key={uuid()}>
                  <h2 className={classes.faqListItemHeader}>{minTwoDigits(i + 1)}</h2>
                  <h3 className={classes.faqQuestion}>{q.question}</h3>
                  <p className={classes.faqAnswer}>{q.answer}</p>
                </div> 
              )})
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Faq);