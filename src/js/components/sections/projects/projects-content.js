import React, { Component } from 'react';
var projectsData = require('../../../../data/projects.json');
import ProjectsList from './projects-list.js';

export default class ProjectsContent extends Component {
  render() {
    return (
      <div className="projects-content content">
        <ProjectsList projects={Object.entries(projectsData)} />
      </div>
    )
  };
};
