import React, { Component } from 'react';

export default class SubHeader extends Component {
  render() {
    return (
      <div className={"sub-header " + this.props.divClass}>
        <img src={this.props.iconsrc} alt={this.props.iconalt} className="sub-header-icon" />
        <h2>{this.props.subtitle}</h2>
        {this.props.description != null ? <h5 className="sub-header-description">{this.props.description}</h5> : null}
      </div>
    )
  }
}
