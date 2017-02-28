import React, { Component } from 'react';
import Content from '../layout/content.js';

export default class Tab extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="tab">
        <Content components={this.props.content} divClass="tab-content" />
      </div>
    )
  }
}
