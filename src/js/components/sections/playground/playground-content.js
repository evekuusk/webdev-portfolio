import React, { Component } from 'react';
var projectsData = require('../../../../data/projects.json');
import ProjectsList from './projects-list.js';

export default class PlaygroundContent extends Component {
  // constructor(props) {
  //   super(props);
  // };
  render() {
    return (
      <div className="playground-content content">
        <ProjectsList projects={Object.entries(projectsData)} />
      </div>
    )
  };
};
