import React, { Component } from 'react';
// components -> layout
import Header from './js/components/layout/header.js';
import SubHeader from './js/components/layout/subheader.js';
import Footer from './js/components/layout/footer.js';
// components -> navigation
import TabsAccordion from './js/components/navigation/tabs-accordion.js';
import Tab from './js/components/navigation/tab.js';
// components -> sections
import AboutContent from './js/components/sections/about/about-content.js';
import ExperienceContent from './js/components/sections/experience/experience-content.js';
import EducationContent from './js/components/sections/education/education-content.js';
import ProjectsContent from './js/components/sections/projects/projects-content.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <Header />
            <TabsAccordion tabs={[
              <Tab index={0} label="About" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="About Me" divClass="about-area-header" iconsrc="../media/img/about-icon.svg" iconalt="about section icon" />
                  <AboutContent />
                </div>
              } />,

              <Tab index={1} label="Experience" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Professional Experience" divClass="experience-area-header" iconsrc="../media/img/experience-icon.svg" iconalt="experience section icon" />
                  <ExperienceContent />
                </div>
              } />,

            <Tab index={2} label="Education" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Education" divClass="education-area-header" iconsrc="../media/img/education-icon.svg" iconalt="education section icon" />
                  <EducationContent />
                </div>
              } />,

            <Tab index={3} label="Projects" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Example Projects" divClass="projects-area-header" iconsrc="../media/img/projects-icon.svg" iconalt="projects section icon" />
                  <ProjectsContent />
                </div>
              } />
            ]} />
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
