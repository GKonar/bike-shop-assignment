import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { minTwoDigits } from './helpers';

import faqImage from './assets/images/black_white.jpeg'
import styles from './styles/FaqStyles';


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