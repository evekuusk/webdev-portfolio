import React, { Component } from 'react';

export default class Content extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="tab-content">
        {this.props.components}
      </div>
    )
  }
}
