import React, { Component } from 'react';
import Scroll from 'react-scroll';

// react-scroll library variable
var scroll = Scroll.animateScroll;

export default class Footer extends Component {
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
