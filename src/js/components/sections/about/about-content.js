import React, { Component } from 'react';
var introData = require('../../../../data/intro.json');
import Recaptcha from 'react-recaptcha';

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'intro': [],
      'submit_enabled': false
    }
  }
  componentDidMount() {
    this.setState({
      'intro': introData['ABOUT_PARAGRAPH']
    })
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
    var win = window.open('mailto:eve.kuusk.dev@gmail.com?subject=hello', '_blank');
    win.focus();
  }
  render() {
    const introParagraph = this.state.intro.map(function(paragraph, index) {
      return <p key={index}>{paragraph}</p>
    });
    return (
      <div className="home-content content">
        <h3>Introduction</h3>
          {introParagraph}

        <hr />
        <h3>Contact</h3>
          <p>I am currently seeking a new professional challenge.  Please send me an email using the button below if you would like to get in touch.</p>

          <Recaptcha sitekey="6LfqchcUAAAAAJi5QCHhVBQt49a0tDtpfyTDj_6h" render="explicit" onloadCallback={this.onloadCallback} verifyCallback={this.verifyCallback.bind(this)} />

          <button className={this.state.submit_enabled === true ? "email" : "email disabled"} onClick={this.sendEmail.bind(this)}>Email Me</button>
      </div>
    )
  };
};
