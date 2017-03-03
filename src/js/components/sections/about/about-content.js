import React, { Component } from 'react';
import SkillsChart from './skills-chart.js';
import SkillsList from './skills-list.js';

var introData = require('../../../../data/intro.json');
var skillsData = require('../../../../data/skills.json');

export default class HomeContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'intro': []
    }
  };
  componentDidMount() {
    this.setState({
      'intro': introData['ABOUT_PARAGRAPH']
    })
  };
  render() {
    const introParagraph = this.state.intro.map(function(paragraph, index) {
      return <p key={index}>{paragraph}</p>
    });
    return (
      <div className="about-content content">
        <div className="about-section section">
          <h3>Introduction</h3>
            {introParagraph}
        </div>

        <div className="about-section section">
          <h2>Technical Skills<br /><span className="subheader">Entirely subjective and therefore largely meaningless qualifiers for my skills</span></h2>
            <SkillsChart header="Technical" data={skillsData['TECHNICAL']} />
            <SkillsChart header="Development Tools & Conepts" data={skillsData['TOOLS']} />
        </div>

        <div className="about-section section">
          <h2>Practical Skills</h2>
            <SkillsList header="Practical" data={skillsData['PRACTICAL']} />
        </div>
      </div>
    )
  };
};
