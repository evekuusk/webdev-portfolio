import React, { Component } from 'react';
var charGenData = require('../../../../../data/projects/character-generator-data.json');
import Character from './character.js';

export default class CharacterGeneratorProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'char_type': "",
      'char_type_description': "",
      'char_type_A': "",
      'char_type_B': "",
      'char_type_C': "",
      'char_type_D': "",
      'char_traits': [],
      'char_conflict': "",
      'char_motivation': "",
      'char_gen_complete': false,
      'char_gen_started': false
    }
  };
  chooseAtRandom(choices, current) {
    var new_choice
    if (current === null || current === undefined) {
      var num = this.randomNum(0, choices.length)
      new_choice = choices[num]
    } else if (typeof(current) === "object") {

    } else if (typeof(current) === "string") {
      new_choice = current
      while (new_choice === current) {
        var num = this.randomNum(0, choices.length)
        new_choice = choices[num]
      }
    }
    return new_choice
  };
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  chooseTraits(choices, num) {
    var current_type = this.state.char_type
    var A = current_type.charAt(0)
    var B = current_type.charAt(1)
    var C = current_type.charAt(2)
    var D = current_type.charAt(3)
    var new_choices = []
    var choices_A
    {A === 'I' ? choices_A = choices['A']['Introvert'] : choices_A = choices['A']['Extrovert']}
    var choices_B
    {B === 'N' ? choices_B = choices['B']['Intuitive'] : choices_B = choices['B']['Sensing']}
    var choices_C
    {C === 'T' ? choices_C = choices['C']['Thinking'] : choices_C = choices['C']['Feeling']}
    var choices_D
    {D === 'J' ? choices_D = choices['D']['Judging'] : choices_D = choices['D']['Perceiving']}
    // create array of three traits
    new_choices.push(this.chooseAtRandom(choices_A, null))
    new_choices.push(this.chooseAtRandom(choices_B, null))
    new_choices.push(this.chooseAtRandom(choices_C, null))
    new_choices.push(this.chooseAtRandom(choices_D, null))
    // make sure none match for overlapping traits
    while (new_choices[0] === new_choices[1] || new_choices[0] === new_choices[2] || new_choices[0] === new_choices[3]) {
      new_choices[0] = this.chooseAtRandom(choices_A, null)
    }
    while (new_choices[1] === new_choices[2] || new_choices[1] === new_choices[3] || new_choices[1] === new_choices[0]) {
      new_choices[1] = this.chooseAtRandom(choices_B, null)
    }
    while (new_choices[2] === new_choices[3] || new_choices[2] === new_choices[0] || new_choices[2] === new_choices[1]) {
      new_choices[2] = this.chooseAtRandom(choices_C, null)
    }
    while (new_choices[3] === new_choices[0] || new_choices[3] === new_choices[1] || new_choices[3] === new_choices[2]) {
      new_choices[3] = this.chooseAtRandom(choices_D, null)
    }
    return new_choices
  }
  generateFullCharacter() {
    console.log(charGenData)
    this.generateCharacterType()
    this.generateCharacterConflict()
    this.generateCharacterMotivation()
    this.setState({
      'char_gen_started': true,
      'char_gen_complete': true
    })
  };
  generateCharacterType() {
    var current
    if (this.state.char_type != "") {
      current = this.state.char_type
    } else {
      current = null
    }
    var types = charGenData['PERSONALITY_TYPES']
    var char_type = this.chooseAtRandom(types, current)
    var A = char_type.charAt(0)
    var B = char_type.charAt(1)
    var C = char_type.charAt(2)
    var D = char_type.charAt(3)
    {A === 'I' ? A = 'Introvert' : A = 'Extrovert'}
    {B === 'N' ? B = 'Intuitive' : B = 'Sensing'}
    {C === 'T' ? C = 'Thinking' : C = 'Feeling'}
    {D === 'J' ? D = 'Judging' : D = 'Perceiving'}
    var description = [A, B, C, D]
    this.setState({
      'char_type': char_type,
      'char_type_description': description.join(' '),
      'char_type_A': A,
      'char_type_B': B,
      'char_type_C': C,
      'char_type_D': D,
      'char_gen_started': true
    })
    this.generateCharacterTraits()
  };
  generateCharacterConflict() {
    var current
    if (this.state.char_conflict != "") {
      current = this.state.char_conflict
    } else {
      current = null
    }
    var conflicts = charGenData['CONFLICTS']
    var char_conflict = this.chooseAtRandom(conflicts, current)
    this.setState({
      'char_conflict': char_conflict,
      'char_gen_started': true
    })
  };
  generateCharacterMotivation() {
    var current
    if (this.state.char_motivation != "") {
      current = this.state.char_motivation
    } else {
      current = null
    }
    var motivations = charGenData['MOTIVATIONS']
    var char_motivation = this.chooseAtRandom(motivations, current)
    this.setState({
      'char_motivation': char_motivation,
      'char_gen_started': true
    })
  }
  generateCharacterTraits() {
    var current_type
    if (this.state.char_type != "") {
      current_type = this.state.char_type
    } else {
      current_type = null
    }
    var traits_list = charGenData["TRAITS"]
    var char_traits = this.chooseTraits(traits_list)
    this.setState({
      'char_traits': char_traits
    })
  }
  render() {
    return (
      <div>
        <h5>Generate a complete fictional character...</h5>
        <button onClick={() => this.generateFullCharacter()}>New Complete Character</button>
        <hr />
        <h5>...Or roll for traits one at a time</h5>
        <button onClick={() => this.generateCharacterType()}>{this.state.char_type !== "" ? "Re-roll" : "Roll"} for Type</button>
        <button className={this.state.char_type != "" ? "" : "disabled"} onClick={() => this.generateCharacterTraits()}>{this.state.char_type !== "" ? "Re-roll" : "Roll"} for Character Traits</button>
        <button onClick={() => this.generateCharacterConflict()}>{this.state.char_conflict !== "" ? "Re-roll" : "Roll"} for Inner Conflict</button>
        <button onClick={() => this.generateCharacterMotivation()}>{this.state.char_motivation !== "" ? "Re-roll" : "Roll"} for Character Motivation</button>

        <hr />
        {this.state.char_gen_started ? <Character type={this.state.char_type} traits={this.state.char_traits} description={this.state.char_type_description} conflict={this.state.char_conflict} motivation={this.state.char_motivation} /> : null}
      </div>
    )
  }
}
