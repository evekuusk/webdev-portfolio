import React, { Component } from 'react';
import Tab from './tab.js';

export default class TabsAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 0,
      nextBtn: true,
      prevBtn: false,
      lastTabIndex: this.props.tabs.length - 1
    }
  };
  incrementTab() {
    this.goToTab(this.state.openTab + 1)
  };
  decrementTab() {
    this.goToTab(this.state.openTab - 1)
  };
  goToTab(num) {
    this.setState({
      openTab: num,
      nextBtn: this.state.lastTabIndex == num ? false : true,
      prevBtn: num == 0 ? false : true
    })
  };
  render() {
    const navBtns = this.props.tabs.map((btn, index) => (
      <button type="button" key={index} className={this.state.openTab == btn.props.index ? "tab-nav disabled" : "tab-nav"} onClick={() => this.goToTab(btn.props.index)}>{btn.props.label}</button>
    ));
    return (
      <div className="tabs-accordion">
        <div className="tab-nav-btns">{navBtns}</div>
        {this.props.tabs[this.state.openTab]}
        <div className="nav-btns">
          <button type="button" className={this.state.prevBtn ? "prev-tab-btn" : "prev-tab-btn disabled"} onClick={() => this.decrementTab()}>Previous</button>
          <button type="button" className={this.state.nextBtn ? "next-tab-btn" : "next-tab-btn disabled"} onClick={() => this.incrementTab()}>Next</button>
        </div>
      </div>
    )
  }
};
