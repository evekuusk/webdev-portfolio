import React, { Component } from 'react';
import Scroll from 'react-scroll';

// react-scroll library variable
var scroll = Scroll.animateScroll;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'submit_enabled': true
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
  };
  goToLink(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  render() {
    let imgStylesTop = {
      backgroundImage: "url('media/img/back-to-top.png')",
      backgroundSize: "2rem"
    }
    let imgStylesEmail = {
      backgroundImage: "url('media/img/email.png')",
      backgroundSize: "2rem"
    }
    let imgStylesLinkedin = {
      backgroundImage: "url('media/img/linkedin.png')",
      backgroundSize: "2rem"
    }
    return (
      <div className="footer">
        <div className="contact">
          <button className="email" onClick={() => this.sendEmail()} style={imgStylesEmail}></button>
          <button className="linkedin" onClick={() => this.goToLink("https://www.linkedin.com/in/evekuusk")} style={imgStylesLinkedin}></button>
        </div>
        <button className="back-to-top" onClick={() => this.backToTop()} style={imgStylesTop}></button>
      </div>
    )
  }
}
