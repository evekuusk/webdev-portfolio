import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
var rotateTimer

export default class ColourMatchGameProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'drop_colours_arr': [
        'drop-blue',
        'drop-red',
        'drop-yellow'
      ],
      'drop_colour': 'drop-blue',
      'correct_drops': 0,
      'incorrect_drops': 0,
      'game_started': false,
      'failed': false,
      'winner': false,
      'num_required': 9
    }
  };
  selectNextColour() {
    console.log('choosing next colour.....')
    var nextColour
    for (var i = 0; i < this.state.drop_colours_arr.length; i++) {
      if (this.state.drop_colour === this.state.drop_colours_arr[i] && i < (this.state.drop_colours_arr.length)) {
        nextColour = this.state.drop_colours_arr[i + 1]
      } else {
        nextColour = this.state.drop_colours_arr[0]
      }
    }
    console.log(this.state.drop_colour, nextColour)
    this.setState({
      'drop_colour': nextColour
    })
  }
  rotateDropColours() {
    var milliseconds = 3000
    rotateTimer = setInterval(function() {
      console.log('switch')
      if (milliseconds > 800) {
        milliseconds = milliseconds - 400
      }
      console.log('milliseconds', milliseconds)
      this.selectNextColour()
    }.bind(this), milliseconds)
  };
  checkFail() {
    if (this.state.incorrect_drops === 4) {
      this.setState({
        'failed': true
      })
      clearInterval(rotateTimer)
      console.log('timer stopped')
    } else if (this.state.correct_drops === this.state.num_required) {
      this.setState({
        'winner': true,
        'failed': null
      })
    }
  }
  checkColourMatching(drag, drop) {
    if (drag == drop) {
      console.log('CORRECT!')
      this.setState({
        'correct_drops': this.state.correct_drops + 1
      })
    } else {
      console.log('NOPE!')
      this.setState({
        'incorrect_drops': this.state.incorrect_drops + 1
      })
    }
    this.checkFail()
  };
  onDrop(data) {
    var drop_colour = this.state.drop_colour.split('-')
    drop_colour = drop_colour[1]
    this.checkColourMatching(data['colour'], drop_colour)
    if (this.state.game_started === false) {
      this.setState({
        'game_started': true
      })
      this.rotateDropColours()
    }
  };
  render() {
    return (
      <div>
        <h3>Colour Matching Game</h3>
        <h5>The Dark Souls of nonsense drag-and-drop games!</h5>
        {this.state.failed === false ? <div className="game">
          <div className="draggables">
            <Draggable className="draggable-wrapper drag-blue" type="colour" data="blue"><div className="draggable-content">blue</div></Draggable>
            <Draggable className="draggable-wrapper drag-red" type="colour" data="red"><div className="draggable-content">red</div></Draggable>
            <Draggable className="draggable-wrapper drag-yellow" type="colour" data="yellow"><div className="draggable-content">yellow</div></Draggable>
          </div>
          <hr />
          <Droppable className="droppable-wrapper" types={['colour']} className={this.state.drop_colour} onDrop={this.onDrop.bind(this)}>
            <div className="droppable-content">DROPPABLE</div>
          </Droppable>
        </div> : this.state.winner === true ? <div className="results"><p>Winner!</p></div> : <div className="results"><p>You failed!</p><p>Too many incorrect drops.</p></div>}
      </div>
    )
  }
}
