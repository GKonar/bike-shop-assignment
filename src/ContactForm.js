import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';

const styles = {
  contact: {
    backgroundColor: "#fff",
    width: "600px",
    padding: "1rem 2rem",
    borderRadius: "5px"
  },
  contactHeader: {
    color: "#64C29E",
    letterSpacing: "1px"
  },
  paragraph: {
    margin: "1rem 2rem",
    fontWeight: 500
  },
  contactForm: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    margin: ".2rem 2rem"
  },
  textArea: {
    margin: ".2rem 2rem",
  },
  submitButton: {
    width: "40%",
    margin: "1rem auto",
    padding: "1rem"
  }
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      subject: '',
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const { username, email, subject, message } = this.state
    alert(`Hello ${username} Your email: ${email}, Subject: ${subject} and finally message : ${message}`);

    this.setState({ 
      username: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { classes } = this.props;
    const { username, email, subject, message } = this.state;
    return (
      <div className={ classes.contact }>
        <h1 className={ classes.contactHeader }>CONTACT US</h1>
        <p className={ classes.paragraph }>Have questions ?</p>
        <p className={ classes.paragraph }>They might be answered in our <Link to="customer/faq">FAQ</Link>. We tried to cover just about everything you need to know.</p>
        <p className={ classes.paragraph }> You can also email us at: info@mysite.com or fill in our contact form:</p>
        <form className={ classes.contactForm } onSubmit={ this.handleSubmit }>
            <TextField
              id="outlined-name"
              label="Name"
              name="username"
              className={classes.textField}
              value={ username }
              onChange={this.handleChange}
              variant="filled"
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              onChange={this.handleChange}
              type="email"
              name="email"
              value={ email }
              autoComplete="email"
              variant="filled"
            /> 
            <TextField
              id="outlined-subject"
              label="Subject"
              name="subject"
              className={classes.textField}
              value={ subject }
              onChange={this.handleChange}
              variant="filled"
            />
            <TextField
              id="outlined-textarea"
              label="Message"
              value={ message }
              name="message"
              onChange={this.handleChange}
              multiline
              className={classes.textArea}
              variant="filled"
              rows={8}
            />
            <Button className={classes.submitButton} type="submit" variant="outlined" color="primary"> SEND </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(ContactForm);
