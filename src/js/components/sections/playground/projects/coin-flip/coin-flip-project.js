import React, { Component } from 'react';

export default class CoinFlipProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'num_times_flipped': 0,
      'current_face': null,
      'user_guess': null
    }
  };
  render() {
    return (
      <div>
        coin flip project
      </div>
    )
  }
}
