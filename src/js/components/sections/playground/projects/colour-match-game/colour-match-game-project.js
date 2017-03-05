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
      'num_required': 24,
      'intervals': [1750, 1500, 1250, 1000, 750, 500, 400]
    }
  };
  selectNextColour() {
    var nextColour
    for (var i = 0; i < this.state.drop_colours_arr.length; i++) {
      if (this.state.drop_colour === this.state.drop_colours_arr[i]) {
        if (i === this.state.drop_colours_arr.length - 1) {
          nextColour = this.state.drop_colours_arr[0]
        } else {
          nextColour = this.state.drop_colours_arr[i + 1]
        }
        break;
      }
    }
    this.setState({
      'drop_colour': nextColour
    })
  }
  rotateDropColours() {
    var milliseconds_arr = this.state.intervals
    // first speed
    var counter = 0
    rotateTimer = setInterval(function() {
      counter = counter + 1
      this.selectNextColour()
      if (counter === 3) {
        // second speed
        clearInterval(rotateTimer)
        counter = 0
        rotateTimer = setInterval(function() {
          counter = counter + 1
          this.selectNextColour()
          if (counter === 3) {
            // third speed
            clearInterval(rotateTimer)
            counter = 0
            rotateTimer = setInterval(function() {
              counter = counter + 1
              this.selectNextColour()
              if (counter === 3) {
                // fourth speed
                clearInterval(rotateTimer)
                counter = 0
                rotateTimer = setInterval(function() {
                  counter = counter + 1
                  this.selectNextColour()
                  if (counter === 3) {
                    // fifth speed
                    clearInterval(rotateTimer)
                    counter = 0
                    rotateTimer = setInterval(function() {
                      counter = counter + 1
                      this.selectNextColour()
                      if (counter === 3) {
                        // sixth speed
                        clearInterval(rotateTimer)
                        counter = 0
                        rotateTimer = setInterval(function() {
                          counter = counter + 1
                          this.selectNextColour()
                          // continue until win or fail
                        }.bind(this), milliseconds_arr[5])
                      }
                    }.bind(this), milliseconds_arr[4])
                  }
                }.bind(this), milliseconds_arr[3])
              }
            }.bind(this), milliseconds_arr[2])
          }
        }.bind(this), milliseconds_arr[1])
      }
    }.bind(this), milliseconds_arr[0])
  };
  checkFail() {
    if (this.state.incorrect_drops === 4) {
      this.setState({
        'failed': true
      })
      clearInterval(rotateTimer)
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
            <Draggable className="draggable-wrapper drag-blue" type="colour" data="blue"></Draggable>
            <Draggable className="draggable-wrapper drag-red" type="colour" data="red"></Draggable>
            <Draggable className="draggable-wrapper drag-yellow" type="colour" data="yellow"></Draggable>
          </div>
          <hr />
          <Droppable className="droppable-wrapper" types={['colour']} className={this.state.drop_colour} onDrop={this.onDrop.bind(this)}>
            <p>{this.state.game_started === false ? "Drop a colour here to begin!" : null}</p>
          </Droppable>
        </div> : this.state.winner === true ? <div className="results"><p>Winner!</p></div> : <div className="results"><p>You failed!</p><p>Too many incorrect drops.</p></div>}
      </div>
    )
  }
}
