import React, { Component } from 'react';

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.openProjectModal = this.openProjectModal.bind(this)
    this.state = {
      'projects': this.props.projects,
      'open_project': null,
      'modal_open': false
    }
  };
  openProjectModal(key) {
    console.log('test', key)
  };
  render() {
    const projectButtons = this.props.projects.map(function(item, index) {
      return (
        <button key={index} onClick={() => this.openProjectModal(item[1]['component'])}>{item[0]}</button>
      )
    }, this)

    return (
      <div className="projects-list">
        <p>this is the projects list</p>
        {projectButtons}
      </div>
    )
  };
};
