import React, { Component } from 'react';
var projectsData = require('../../../../data/projects.json');
import ProjectsList from './projects-list.js';

export default class PlaygroundContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'projects_array': [],
      'projects_object': {}
    }
  };
  componentDidMount() {
    this.setState({
      'projects_array': Object.entries(projectsData),
      'projects_object': projectsData
    })
  }
  render() {
    return (
      <div className="playground-content content">
        <ProjectsList />
      </div>
    )
  };
};
