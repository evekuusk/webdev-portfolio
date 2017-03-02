import React, { Component } from 'react';
var experienceData = require('../../../../data/experience.json');

export default class ExperienceContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'work': [],
      'learning': [],
      'education': []
    }
  }
  componentDidMount() {
    this.setState({
      'work': experienceData['PROFESSIONAL_EXPERIENCE'],
      'learning': experienceData['INDEPENDENT_LEARNING'],
      'education': experienceData['EDUCATION']
    })
  }
  render() {
    const workList = this.state.work.map(function(item, index) {
      var tech = item.technology.join(', ')
      var accomplishments = []
      for (var i = 0; i < item.accomplishments.length; i++) {
        accomplishments.push(<li key={i}>{item.accomplishments[i]}</li>)
      }
      return (
        <div className='job-block' key={index}>
          <h3 className="job-header">
            {item.title}&nbsp; @ &nbsp;{item.company}
            &nbsp; ({item.location})
            &nbsp; <a href={'http://' + item.website} target="_blank"><span className="website">{item.website}</span></a>
          </h3>
          <h4 className="date">{item.start} - {item.end}</h4>
          <h4>Technology Used</h4>
          <p>{tech}</p>
          <h4>Accomplishments</h4>
          <ul>{accomplishments}</ul>
        </div>
      )
    })

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
      return (
        <div key={index} className="education-list">
          <h4 className="education-item">{item.school}</h4>
          <h5>{item.program}, {item.timeline}</h5>
          <p className="list">{item.description}</p>
        </div>
      )
    })
    return (
      <div className="experience-content content">
        <h2>Professional Work</h2>
          {workList}

        <hr />
        <h3>Self-Directed Learning</h3>
          <h5>Completed course tracks & stand-alone courses</h5>
          {learningList}
        <h3>Education</h3>
          <p>Currently taking pre-requisite math courses for admission into part-time evening classes for computer science</p>
          {educationList}
      </div>
    )
  };
};
