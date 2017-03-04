import React, { Component } from 'react';
var charGenData = require('../../../../../../data/projects/character-generator-data.json');

export default class CharacterGeneratorProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'char_type': "",
      'char_type_A': "",
      'char_type_B': "",
      'char_type_C': "",
      'char_type_D': "",
      'char_traits': [],
      'char_arc': "",
      'char_conflict': "",
      'char_motivation': "",
      'char_gen_complete': false
    }
  };
  chooseAtRandom(choices, current) {
    var new_choice
    if (current === null || current === undefined) {

    } else if (typeof(current) === "object") {

    } else if (typeof(current) === "string") {

    }
    return new_choice
  };
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

    new_choices.push(this.chooseAtRandom(choices_A))
    new_choices.push(this.chooseAtRandom(choices_B))
    new_choices.push(this.chooseAtRandom(choices_C))
    new_choices.push(this.chooseAtRandom(choices_D))

    return new_choices
  }
  generateFullCharacter() {
    console.log(charGenData)
    this.generateCharacterType()
    this.generateCharacterArc()
  };
  generateCharacterType() {
    var current
    if (this.state.char_type != "") {
      current = this.state.char_type
    } else {
      current = null
    }
    var types = charGenData['PERSONALITY_TYPES']
    var char_type = "INTJ"
    var A = char_type.charAt(0)
    var B = char_type.charAt(1)
    var C = char_type.charAt(2)
    var D = char_type.charAt(3)
    {A === 'I' ? A = 'Introvert' : A = 'Extrovert'}
    {B === 'N' ? B = 'Intuitive' : B = 'Sensing'}
    {C === 'T' ? C = 'Thinking' : C = 'Feeling'}
    {D === 'J' ? D = 'Judging' : D = 'Perceiving'}
    this.setState({
      'char_type': char_type,
      'char_type_A': A,
      'char_type_B': B,
      'char_type_C': C,
      'char_type_D': D
    })
    this.generateCharacterTraits()
  };
  generateCharacterArc() {
    var current
    if (this.state.char_arc != "") {
      current = this.state.char_arc
    } else {
      current = null
    }
    var arcs = charGenData['GROWTH']
    var arc_start = "aaaa"
    var arc_end = "bbbb"
    this.setState({
      'char_arc': [
        arc_start,
        arc_end
      ]
    })
  };
  generateCharacterConflict() {
    var current
    if (this.state.char_conflict != "") {
      current = this.state.char_conflict
    } else {
      current = null
    }
    var conflicts = charGenData['CONFLICTS']
    var char_conflict = "aaaa"
    this.setState({
      'char_conflict': char_conflict
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
    var char_motivation = 'aaaa'
    this.setState({
      'char_motivation': char_motivation
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
    var char_traits = ['aaaa', 'bbbb', 'cccc', 'dddd']
    this.setState({
      'char_traits': char_traits
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.generateFullCharacter}>New Character</button>
        <hr />
        <button onClick={() => this.generateCharacterType()}>{this.state.char_type !== "" ? "Re-roll" : "Roll"} for Type</button>
        <button className={this.state.char_type != "" ? "" : "disabled"} onClick={() => this.generateCharacterTraits()}>{this.state.char_type !== "" ? "Re-roll" : "Roll"} for Character Traits</button>
        <button onClick={() => this.generateCharacterArc()}>{this.state.char_arc !== "" ? "Re-roll" : "Roll"} for Character Arc</button>
        <button onClick={() => this.generateCharacterConflict()}>{this.state.char_conflict !== "" ? "Re-roll" : "Roll"} for Inner Conflict</button>
        <button onClick={() => this.generateCharacterMotivation()}>{this.state.char_motivation !== "" ? "Re-roll" : "Roll"} for Character Motivation</button>
      </div>
    )
  }
}
