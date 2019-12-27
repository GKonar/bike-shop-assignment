import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';

const styles = {
  contact: {
    backgroundColor: "#fff",
    width: "600px"
  },
  contactHeader: {

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
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text"
            name="username"
            value={ username }
            onChange={this.handleChange}
            placeholder="Name *"
          /> 
          <input 
            type="text"
            name="email"
            value={ email }
            onChange={this.handleChange}
            placeholder="Email *"
          /> 
          <input 
            type="text"
            name="subject"
            value={ subject }
            onChange={this.handleChange}
            placeholder="Subject"
          /> 
          <textarea 
            onChange={this.handleChange}
            value={ message }
            name="message"
            placeholder="Message"
            cols={40} 
            rows={10}
          /> 
          <button>Send</button>
        </form>
      </div>
    )
  }
}


export default withStyles(styles)(ContactForm);


// without MaterialUI

// <input 
// type="text"
// name="username"
// value={ username }
// onChange={this.handleChange}
// placeholder="Name *"
// /> 
// <input 
// type="text"
// name="email"
// value={ email }
// onChange={this.handleChange}
// placeholder="Email *"
// /> 
// <input 
// type="text"
// name="subject"
// value={ subject }
// onChange={this.handleChange}
// placeholder="Subject"
// /> 
// <textarea 
// onChange={this.handleChange}
// value={ message }
// name="message"
// placeholder="Message"
// cols={40} 
// rows={10}
// /> 