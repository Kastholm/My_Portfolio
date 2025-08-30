import React from 'react'
import Dock from './components/ui/dock';
import Intro from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';


function HomePage() {
  return (
    <div className='max-w-screen-sm'>
    <Intro/>
    <About/>
    <Experience/>
    <Education/>
    {/* <Skills/> */}
    <Projects/>
    {/* <Contact/> */}
    <Dock/>
    </div>
  )
}

export default HomePage;
