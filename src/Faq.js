import React from 'react'
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import { minTwoDigits } from './helpers';

import styles from './styles/FaqStyles';

function Faq(props) {
  const { classes, faq } = props;
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

export default withStyles(styles)(Faq);