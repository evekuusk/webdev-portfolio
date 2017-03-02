import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Web Development Portfolio</h1>
        <h2 className="header-name"><span className="invisible-text">---</span>Eve Kuusk<span className="invisible-text">---</span></h2>
      </div>
    )
  };
};
