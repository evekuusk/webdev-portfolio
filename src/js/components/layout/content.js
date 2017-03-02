import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="tab-content">
        {this.props.components}
      </div>
    )
  }
}
