import React, { Component } from 'react';
// components -> layout
import Header from './js/components/layout/header.js';
import SubHeader from './js/components/layout/subheader.js';
import Footer from './js/components/layout/footer.js';
// components -> navigation
import TabsAccordion from './js/components/navigation/tabs-accordion.js';
import Tab from './js/components/navigation/tab.js';
// components -> sections
import HomeContent from './js/components/sections/home/home-content.js';
import ExperienceContent from './js/components/sections/experience/experience-content.js';
import PlaygroundContent from './js/components/sections/playground/playground-content.js';
import ContactContent from './js/components/sections/contact/contact-content.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content-wrapper">
          <Header />
            <TabsAccordion tabs={[
              <Tab index={0} label="Home" content={
                <div className="tab-content-wrapper">
                  <SubHeader subtitle="Home & About Me" divClass="home-area-header" iconsrc="../media/img/placeholder.png" iconalt="icon placeholder" />
                  <HomeContent />
                </div>
              } />,

                <Tab index={1} label="Experience" content={
                  <div className="tab-content-wrapper">
                    <SubHeader subtitle="Professional Experience" divClass="experience-area-header" iconsrc="../media/img/placeholder.png" iconalt="icon placeholder" />
                    <ExperienceContent />
                  </div>
                } />,

              <Tab index={2} label="Playground" content={
                  <div className="tab-content-wrapper">
                    <SubHeader subtitle="Playground" divClass="playground-area-header" iconsrc="../media/img/placeholder.png" description="Directory of Mini Example Projects" iconalt="icon placeholder" />
                    <PlaygroundContent />
                  </div>
                } />,

              <Tab index={3} label="Contact" content={
                  <div className="tab-content-wrapper">
                    <SubHeader subtitle="Contact" divClass="contact-area-header" iconsrc="../media/img/placeholder.png" iconalt="icon placeholder" />
                    <ContactContent />
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
