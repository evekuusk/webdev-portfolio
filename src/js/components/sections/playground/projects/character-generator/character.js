import React, { Component } from 'react';

export default class Character extends Component {
  constructor(props) {
    super(props);
  };
  render() {
      return (
        <div className="character">
          <h4>Generated Character</h4>
          <p><span className="char-identifier">Personality Type: &nbsp;</span>{this.props.type} &nbsp;({this.props.description})</p>
          <p><span className="char-identifier">Fundamental Character Traits: &nbsp;</span>{this.props.traits != null ? this.props.traits.join(', ') : null}</p>
          <p><span className="char-identifier">Inner Conflict: &nbsp;</span>{this.props.conflict}</p>
          <p><span className="char-identifier">Internal Motivation: &nbsp;</span>{this.props.motivation}</p>
        </div>
      )
  };
};
