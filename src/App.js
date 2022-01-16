import ben from './ben.png';
import screenshot1 from './images/screenshot-1.PNG';
import screenshot2 from './images/screenshot-2.PNG';
import screenshot3 from './images/screenshot-3.PNG';
import screenshot4 from './images/screenshot-4.PNG';
import screenshot5 from './images/screenshot-5.PNG';
import screenshot6 from './images/screenshot-6.PNG';
import benbackground from './benbackground.png'
import './App.css';
import React, { useState } from 'react';

function HomePage(props) {
  const [className, setClassName] = useState("enlargein");

  return <div className={className}>
    <div className = "Image-container">
       <img className = "benbackground" src={benbackground} alt = "my face's silhouette"/>
       <img className = "ben" src={ben} alt = "my face"/>
      </div>
        {/* <div className="Title1">
          TITLE
        </div> */}
        <div className="Title2">
          {props.websiteTitle}
        </div>
        <div className="Title3">
          {props.websiteTitle}
        </div>
        
        <div className="Tabs">
          <div onClick={() => {setClassName("transitionout"); setTimeout(() => {props.isHome(false); props.isAbout(true);}, 3000);}} tabIndex={1}>
            About Me
          </div>
          <div className="Border">
            ○
          </div>
          <div onClick={() => {setClassName("transitionout2"); setTimeout(() => {props.isHome(false); props.isProjects(true);}, 2000);}} tabIndex={2}>
            Projects
          </div>
          <div className="Border">
            ○
          </div>
          <div onClick={() => {setClassName("transitionout3"); setTimeout(() => {props.isHome(false); props.isResume(true);}, 1500);}} tabIndex={3}>
            Résumé
          </div>
        </div>
  </div>
}

function AboutPage(props) {
  const [className, setClassName] = useState("fadein");
  return <div className={className}>
    <div className = "BackButton" tabIndex ={1} onClick={() => {setClassName("fadeout"); setTimeout(() => {props.isAbout(false); props.isHome(true);}, 1000);}}> Back </div>
    <div className="PageTitle">
      <div className="Title2">
            About Me
          </div>
      <div className="Title3">
        About Me
      </div>
    </div>
    <div className="Text">
      hello!! i am a software engineer based in wellington, new zealand
    </div>
  </div>
}

function ProjectsPage(props) {
  const [className, setClassName] = useState("fadein");
  return <div className={className}>
    <div className = "BackButton" tabIndex ={1} onClick={() => {setClassName("fadeout"); setTimeout(() => {props.isProjects(false); props.isHome(true);}, 1000);}}> Back </div>
    <div className = "Content-container">
    <div className="PageTitle">
      <div className="Title2">
            Projects
          </div>
      <div className="Title3">
        Projects
      </div>
    </div>
    <ProjectTile/>
    </div>
  </div>
}

function ResumePage(props) {
  const [className, setClassName] = useState("fadein");
  return <div className={className}>
    <div className = "BackButton" tabIndex ={1} onClick={() => {setClassName("fadeout"); setTimeout(() => {props.isResume(false); props.isHome(true);}, 1000);}}> Back </div>
    <div className="PageTitle">
      <div className="Title2">
           Resume
          </div>
      <div className="Title3">
         Resume
      </div>
    </div>
    <div className="Text">
    hire me PLEASE
  </div>
  </div>
}

function ProjectTile(props) {
  return <div className="Full-time-ranger-tile">
    <div className="Full-time-ranger-description">
    full time ranger
    <div className="Full-time-ranger-text">
      a game about picking up trash
    </div>
    <button>
      download
    </button>
    </div>
    <div className="Full-time-ranger-screenshot">
      <ImageSwitcher/>
    </div>
  </div>
}

function ImageSwitcher(props) {
  const screenshots = [
    {
      src: screenshot1,
      alt: "screenshot 1"
    },
    {
      src: screenshot2,
      alt: "screenshot 2"
    },
    {
      src: screenshot3,
      alt: "screenshot 3"
    },
    {
      src: screenshot4,
      alt: "screenshot 4"
    },
    {
      src: screenshot5,
      alt: "screenshot 5"
    },
    {
      src: screenshot6,
      alt: "screenshot 6"
    },
  ]

  const [imageSrc, setImageSrc] = useState(screenshot1)
  const [imageAlt, setImageAlt] = useState("screenshot 1")
  const [screenshotIndex, setScreenshotIndex] = useState(1)

  function selectNextImage() {
    if (screenshotIndex === screenshots.length) {
      setScreenshotIndex(1);
      setImageSrc(screenshot1);
      setImageAlt("screenshot 1")
    } else {
      setScreenshotIndex(screenshotIndex + 1)
      setImageSrc(screenshots[screenshotIndex].src)
      setImageAlt(screenshots[screenshotIndex].alt)
    }
  }

  function selectPreviousImage() {
    if (screenshotIndex === 0) {
      setScreenshotIndex(screenshots.length-1);
      setImageSrc(screenshot6);
      setImageAlt("screenshot 6")
    } else {
      setScreenshotIndex(screenshotIndex - 1)
      setImageSrc(screenshots[screenshotIndex-1].src)
      setImageAlt(screenshots[screenshotIndex-1].alt)
    }
  }

  return (
  <div>
    <img className="Image-switcher" src={imageSrc} alt={imageAlt}/>
    <div className="Image-switcher-button-alt" onClick={() => selectPreviousImage()} tabIndex={1}>
    ➔
    </div>
    <div className="Image-switcher-button" onClick={() => selectNextImage()} tabIndex={2}>
    ➔
    </div>
  </div>)
}

function App() {
  const [home, isHome] = useState(true)
  const [about, isAbout] = useState(false);
  const [projects, isProjects] = useState(false);
  const [resume, isResume] = useState(false);

  var websiteTitle = "ben hanson"

  document.body.style.overflow = "hidden"

  return (
    <div className="App">
      <header className="App-header">          
        {home && <HomePage websiteTitle={websiteTitle} isHome={isHome} isAbout={isAbout} isProjects={isProjects} isResume={isResume} /> }
        {about && <AboutPage isAbout={isAbout} isHome={isHome}/>}
        {projects && <ProjectsPage isProjects={isProjects} isHome={isHome}/>}
        {resume && <ResumePage isResume={isResume} isHome={isHome} />}
      </header>
    </div>
  );
}

export default App;

