import React, { Component } from 'react';
var educationData = require('../../../../data/education.json');

export default class EducationContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'learning': [],
      'education': []
    }
  }
  componentDidMount() {
    this.setState({
      'learning': educationData['INDEPENDENT_LEARNING'],
      'education': educationData['EDUCATION']
    })
  }
  render() {
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
          <a href={item[1]}><span className="learning-item">{item[0]}</span></a>: &nbsp;<span className="list">{items}</span>
        </p>
      )
    });
    const educationList = this.state.education.map(function(item, index) {
      var courses = []
      var courseList = <ul></ul>
      for (var i = 0; i < item.courses.length; i++) {
        courses.push(<li key={i}>{item.courses[i]}</li>)
      }
      courseList = <ul>{courses}</ul>
      return (
        <div key={index} className="education-list">
          {item.earned != "" ? <h3>{item.earned}</h3> : null}
          <h3 className="education-item">{item.school}</h3>
          <h4>{item.program}, {item.timeline}</h4>
          <p className="list">{item.description}</p>
          {courses.length != 0 ? <h4>Course list</h4> : null}
          {courses.length != 0 ? courseList : null}
        </div>
      )
    })
    return (
      <div className="experience-content content">
        <h4>Currently taking pre-requisite courses for admission into a part-time computer science degree program</h4>
        <h2>Post-Secondary</h2>
          {educationList}
        <hr />
        <h2>Self-Directed Learning</h2>
          <h5>Completed course tracks & stand-alone courses</h5>
          {learningList}
      </div>
    )
  };
};
