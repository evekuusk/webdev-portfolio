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
          <h2>Introduction<br /><span className="subheader">Disclaimer: contains hyperbole and pompous musings</span></h2>
            {introParagraph}
            <div className="gif-box">
              <img src="media/img/eve.gif" alt="me"/>
              <figcaption>Courtesy of <a href="http://chrisnagyillustration.wordpress.com" target="_blank">Chris Nagy</a></figcaption>
            </div>
        </div>

        <div className="about-section section">
          <h2>Technical Skills<br /><span className="subheader">Disclaimer: entirely subjective and therefore largely meaningless</span></h2>
            <SkillsChart header="Technical" data={skillsData['TECHNICAL']} />
            <SkillsChart header="Development Tools & Concepts" data={skillsData['TOOLS']} />
        </div>

        <div className="about-section section">
          <h2>Practical Skills<br /><span className="subheader">See also: excessive cheerfulness</span></h2>
            <SkillsList header="Practical" data={skillsData['PRACTICAL']} />
        </div>
      </div>
    )
  };
};
