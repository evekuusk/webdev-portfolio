import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

export default class ContactContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'submit_enabled': false,
      'submit_email': '',
      'submit_name': '',
      'submit_message': ''
    }
  }
  onloadCallback() {
    console.log('CAPTCHA ready')
  }
  verifyCallback() {
    console.log('CAPTCHA verified')
    this.setState({
      'submit_enabled': true
    })
  }
  submitForm() {

  }
  render() {
    return (
      <div className="contact-content content">
        <form>
          <h5 className="input-label">Name:</h5>
            <input type="text"></input>
          <h5 className="input-label">Email:</h5>
            <input type="text"></input>
          <h5 className="input-label">Message:</h5>
          <textarea maxLength="400"></textarea>
            <br />

          <Recaptcha sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h" render="explicit" onloadCallback={this.onloadCallback} verifyCallback={this.verifyCallback.bind(this)} />
        </form>
          <button className={this.state.submit_enabled === true ? "submit" : "submit disabled"} onClick={this.submitForm.bind(this)}>Submit</button>
      </div>
    )
  };
};

// <Recaptcha sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h" />
// <div className="g-recaptcha" data-sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h"></div>
