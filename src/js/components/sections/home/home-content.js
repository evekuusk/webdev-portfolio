import React, { Component } from 'react';
var introData = require('../../../../data/intro.json');

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(introData)
  }
  render() {
    return (
      <div className="home-content">
        <p>This is the Home content section</p>
      </div>
    )
  };
};
