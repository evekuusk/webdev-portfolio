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
    let imgStyles = {
      backgroundImage: "url('media/img/placeholder.png')"
    }
    return (
      <div className="footer">
        <button className="back-to-top" onClick={() => this.backToTop()} style={imgStyles}></button>
      </div>
    )
  }
}
