import React, { Component } from 'react';
var introData = require('../../../../data/intro.json');

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'intro': [],
      'learning': [],
      'education': []
    }
  }
  componentDidMount() {
    this.setState({
      'intro': introData['ABOUT_PARAGRAPH'],
      'learning': introData['INDEPENDENT_LEARNING'],
      'education': introData['EDUCATION']
    })
  }
  render() {
    const introParagraph = this.state.intro.map(function(paragraph, index) {
      return <p key={index}>{paragraph}</p>
    });

    const learningList = this.state.learning.map(function(item, index) {
      var items = []
      for (var i = 0; i < item.length; i++) {
        items.push(item[i])
      }
      items.shift()
      items.shift()
      items = items.join(', ')
      return (
        <p key={index} className="learning-list">
          <a href={item[1]}><span className="learning-item">{item[0]}</span></a>:
          <span className="list">{items}</span>
        </p>
      )
    });
    const educationList = this.state.education.map(function(item, index) {
      var items = []
      for (var i = 0; i < item.length; i++) {
        items.push(item[i])
      }
      items.shift()
      items = items.join(', ')
      return (
        <p key={index} className="education-list">
          <span className="education-item">{item[0]}</span>
          <br />
          <span className="list">{items}</span>
        </p>
      )
    })
    return (
      <div className="home-content content">
        <h3>Introduction</h3>
          {introParagraph}
        <h3>Self-Directed Learning</h3>
          {learningList}
        <h3>Education</h3>
          <p>Currently taking pre-requisite math courses for admission into part-time evening classes for computer science</p>
          {educationList}
      </div>
    )
  };
};
