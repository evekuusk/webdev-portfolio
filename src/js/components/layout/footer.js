import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Recaptcha from 'react-recaptcha';

// react-scroll library variable
var scroll = Scroll.animateScroll;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'submit_enabled': false
    }
  }
  backToTop() {
    scroll.scrollToTop({
      duration: 350
    });
  }
  onloadCallback() {
    console.log('CAPTCHA ready')
  }
  verifyCallback() {
    this.setState({
      'submit_enabled': true
    })
    console.log('CAPTCHA verified')
  }
  sendEmail() {
    if (this.state.submit_enabled === true) {
      var win = window.open('mailto:eve.kuusk.dev@gmail.com?subject=hello', '_blank');
      win.focus();
    } else {
      console.log("Try again after verifying the CAPTCHA, sneak!")
    }
  }
  render() {
    let imgStyles = {
      backgroundImage: "url('media/img/back-to-top.png')",
      backgroundSize: "2rem"
    }
    return (
      <div className="footer">
        <div className="contact">
          <h5>Contact</h5>
            <p>I am currently seeking a new professional challenge.  Please send me an email using the button below if you would like to get in touch.</p>

            <Recaptcha sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h" render="explicit" onloadCallback={this.onloadCallback} verifyCallback={this.verifyCallback.bind(this)} />

            <button className={this.state.submit_enabled === true ? "email" : "email disabled"} onClick={this.sendEmail.bind(this)}>Email Me</button>
        </div>

        <button className="back-to-top" onClick={() => this.backToTop()} style={imgStyles}></button>
      </div>
    )
  }
}
