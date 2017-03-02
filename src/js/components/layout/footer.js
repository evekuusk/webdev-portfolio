import React, { Component } from 'react';
import Scroll from 'react-scroll';

// react-scroll library variables
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Footer extends Component {
  constructor(props) {
    super(props);
  };
  backToTop() {
    scroll.scrollToTop({
      duration: 350
    });
  }
  render() {
    return (
      <div className="footer">
        <button className="back-to-top" onClick={() => this.backToTop()}>^</button>
      </div>
    )
  }
}
