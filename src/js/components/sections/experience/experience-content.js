import React, { Component } from 'react';
var experienceData = require('../../../../data/experience.json');

export default class ExperienceContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'work': []
    }
  }
  componentDidMount() {
    this.setState({
      'work': experienceData['PROFESSIONAL_EXPERIENCE']
    })
  }
  render() {
    const workList = this.state.work.map(function(item, index) {
      var tech = []
      for (var i = 0; i < item.technology.length; i++) {
        tech.push(<li key={i}>{item.technology[i]}</li>)
      }

      var accomplishments = []
      for (var j = 0; j < item.accomplishments.length; j++) {
        accomplishments.push(<li key={j}>{item.accomplishments[j]}</li>)
      }
      return (
        <div className='job-block' key={index}>
          <h3 className="job-header">
            {item.title}&nbsp; @ &nbsp;{item.company}
            &nbsp; ({item.location})
            &nbsp; <a href={'http://' + item.website} target="_blank"><span className="website">{item.website}</span></a>
          </h3>
          <h4 className="date">{item.start} - {item.end}</h4>
          <h4>Accomplishments</h4>
          <ul>{accomplishments}</ul>
          <h4>Technologies Used</h4>
          <ul>{tech}</ul>
          {this.state.work.length >= 2 && index < this.state.work.length - 1 ? <hr /> : null}
        </div>
      )
    }.bind(this))

    return (
      <div className="experience-content content">
          {workList}
      </div>
    )
  };
};
