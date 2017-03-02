import React, { Component } from 'react';
var introData = require('../../../../data/intro.json');

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'intro': []
    }
  }
  componentDidMount() {
    console.log(introData)
    this.setState({
      'intro': introData['ABOUT_PARAGRAPH']
    })
  }
  render() {
    const introParagraph = this.state.intro.map(function(paragraph, index) {
      return <p key={index}>{paragraph}</p>
    })
    return (
      <div className="home-content content">
        <h4>Introduction</h4>
        {introParagraph}
      </div>
    )
  };
};
