import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';

export default class ContactContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'submit_enabled': false,
      'submit_email': '',
      'submit_name': '',
      'submit_message': '',
      'submit_company': '',
      'company_validated': false,
      'email_validated': false,
      'name_validated': false,
      'message_validated': false
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
  checkSubmitEnabled() {
    if (this.state.email_validated === true && this.state.name_validated === true && this.message_validated === true && this.company_validated === true) {
      this.setState({
        'submit_enabled': true
      })
    }
  }
  handleNameInput(event) {
    var value = event.target.value
    this.setState({
      'submit_name': value
    })
    this.checkSubmitEnabled()
  }
  handleCompanyInput(event) {
    var value = event.target.value
    this.setState({
      'submit_company': value
    })
    this.checkSubmitEnabled()
  }
  handleEmailInput(event) {
    var value = event.target.value
    this.setState({
      'submit_email': value
    })
    // validate email...
    // set email validated...
    this.checkSubmitEnabled()
  }
  handleMessageInput(event) {
    var value = event.target.value
    this.setState({
      'submit_message': value
    })
    this.checkSubmitEnabled()
  }
  submitForm() {
    console.log('Email sent')
  }
  render() {
    return (
      <div className="contact-content content">
        <form>
          <h5 className="input-label">Name:</h5>
            <input type="text" name="Name Input" onChange={this.handleNameInput.bind(this)} value={this.state.submit_name}></input>
          <h5 className="input-label">Company:</h5>
            <input type="text" name="Company Input" onChange={this.handleCompanyInput.bind(this)} value={this.state.submit_company}></input>
          <h5 className="input-label">Email:</h5>
            <input type="text" name="Email Input" onChange={this.handleEmailInput.bind(this)} value={this.state.submit_email}></input>
          <h5 className="input-label">Message:</h5>
          <textarea name="Message Input" maxLength="400" onChange={this.handleMessageInput.bind(this)} value={this.state.submit_message}></textarea>
            <br />

          <Recaptcha sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h" render="explicit" onloadCallback={this.onloadCallback} verifyCallback={this.verifyCallback.bind(this)} />
        </form>
          <button className={this.state.submit_enabled === true ? "submit" : "submit disabled"} onClick={this.submitForm.bind(this)}>Submit</button>
      </div>
    )
  };
};
