import React, { Component } from 'react';

export default class CoinFlipProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'num_times_flipped': 0,
      'num_times_correct': 0,
      'current_face': null,
      'user_guess': null,
      'spinning': false,
      'results_class': 'incorrect',
      'coin_img_faces': ["media/img/penny-null.png", "media/img/penny-heads.png", "media/img/penny-tails.png"]
    }
  };
  handleUserGuess(value) {
    console.log('You are guessing....', value)
    this.setState({
      'user_guess': value
    })
  };
  testUserGuess() {
    var guess = this.state.user_guess
    var flip_heads = Math.random() >= 0.5
    var face = ""
    if (flip_heads === true) {
      face = "heads"
    } else {
      face = "tails"
    }
    var correct = false
    var numCorrect = this.state.num_times_correct
    if (guess === face) {
      correct = true
      numCorrect += 1
    }
    this.rotateCoin()
    this.setState({
      'current_face': face,
      'num_times_flipped': this.state.num_times_flipped + 1,
      'num_times_correct': numCorrect
    })
  };
  rotateCoin() {
    this.setState({
      'spinning': true,
      'current_face': null
    })
    setTimeout(function() {
      this.setState({
        'spinning': false
      })
    }.bind(this), 500)
  }
  render() {
    return (
      <div className="coin-flip-project">
        <h3>Guess the Coin Flip</h3>
        <h5>The prize is a mildly inflated sense of pride!</h5>
        <hr />
        <h4>Select your {this.state.num_times_flipped === 0 ? "first" : "next"} guess</h4>
        <label>Heads</label>
        <input type="radio" name="guess" value="heads" onChange={() => this.handleUserGuess("heads")} />

        <label>Tails</label>
        <input type="radio" name="guess" value="tails" onChange={() => this.handleUserGuess("tails")} />

        <button className={this.state.user_guess != null ? "flip-btn" : "flip-btn disabled"} onClick={() => this.testUserGuess()}>FLIP</button>

        <div className="animation">
          <img className={this.state.spinning === true ? "coin spinning" : "coin"} src={this.state.current_face === null ? this.state.coin_img_faces[0] : this.state.current_face === "heads" ? this.state.coin_img_faces[1] : this.state.coin_img_faces[2]} />
        </div>

        <hr />

        <div className="results-section">
          {this.state.num_times_flipped >= 1 ? <h3 className="results">{this.state.current_face === this.state.user_guess ? "You got it right!" : "Not this time, pal!"}</h3> : null}
          <p className="results">You have flipped the coin {this.state.num_times_flipped === 1 ? "1 time" : this.state.num_times_flipped.toString() + " times"} and been correct {this.state.num_times_flipped === 0 ? "0" : (Math.round(this.state.num_times_correct / this.state.num_times_flipped * 100))}% of the time.</p>
        </div>
      </div>
    )
  }
}
