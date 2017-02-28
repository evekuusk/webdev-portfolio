import React, { Component } from 'react';
// components -> layout
import Header from './js/components/layout/header.js';
import SubHeader from './js/components/layout/subheader.js';
import Content from './js/components/layout/content.js';
// components -> navigation
import TabsAccordion from './js/components/navigation/tabs-accordion.js';
import Tab from './js/components/navigation/tab.js';
// components -> sections
import AboutContent from './js/components/sections/about/about-content.js';
import ExperienceContent from './js/components/sections/experience/experience-content.js';
import PlaygroundContent from './js/components/sections/playground/playground-content.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <TabsAccordion tabs={[
              <Tab index={0} label="Experience" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Professional Experience" divClass="experience-area-header" iconsrc="../media/img/placeholder.png" iconalt="icon placeholder" />
                  <ExperienceContent />
                </div>
              } />,

              <Tab index={1} label="Playground" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Playground" divClass="playground-area-header" iconsrc="../media/img/placeholder.png" description="Directory of Mini Example Projects" iconalt="icon placeholder" />
                  <PlaygroundContent />
                </div>
              } />,

            <Tab index={2} label="About & Contact" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="About & Contact" divClass="about-area-header" iconsrc="../media/img/placeholder.png" iconalt="icon placeholder" />
                  <AboutContent />
                </div>
              } />
            ]} />
      </div>
    );
  }
}

export default App;
