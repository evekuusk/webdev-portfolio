import React, { Component } from 'react';
import Modal from 'react-modal';
import CharacterGeneratorProject from './character-generator/character-generator-project.js';
import ColourMatchGameProject from './colour-match-game/colour-match-game-project.js';
import CoinFlipProject from './coin-flip/coin-flip-project.js';
import SortByHeightProject from './sort-by-height/sort-by-height-project.js';

export default class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.openProjectModal = this.openProjectModal.bind(this)
    this.state = {
      'projects': this.props.projects,
      'open_project_name': 'label',
      'open_project': null,
      'modal_open': false
    }
  };
  openProjectModal(key) {
    var component
    // PROJECT COMPONENTS:
    switch (key) {
      case "char-gen":
        component = <CharacterGeneratorProject />
        break;
      case "col-match":
        component = <ColourMatchGameProject />
        break;
      case "coin-flip":
        component = <CoinFlipProject />
        break;
      case "sort-height":
        component = <SortByHeightProject />
        break;
      default:
        component = <div>ERROR:  Component not found.</div>
    }
    this.setState({
      'modal_open': true,
      'open_project': component
    })
  };
  closeProjectModal() {
    this.setState({
      'modal_open': false
    })
  };
  render() {
    const projectButtons = this.props.projects.map(function(item, index) {
      return (
        <button key={index} onClick={() => this.openProjectModal(item[1]['key'])}>{item[0]}</button>
      )
    }, this)
    var modalStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(36, 36, 36, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid grey',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
      }
    }
    var closeModalButtonBackground = {
      backgroundImage: "url('media/img/close-modal.png')"
    }
    return (
      <div className="projects-list">
        {projectButtons}
        <Modal isOpen={this.state.modal_open} style={modalStyles} contentLabel={this.state.open_project_name}><button onClick={this.closeProjectModal.bind(this)} className="close-modal-button" style={closeModalButtonBackground}></button><div className="modal-project-content">{this.state.open_project}</div></Modal>
      </div>
    )
  };
};
