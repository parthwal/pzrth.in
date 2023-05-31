import './App.css';
import outArrow from './assets/SVG/arrow_out.svg';
import outArrowRed from './assets/SVG/arrow_out_red.svg';
import downArrow from './assets/SVG/arrow_down.svg';
import omori from './assets/figma/omori.png';
import undertale from './assets/figma/undertale.png';
import punpun from './assets/figma/punpun.png';

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [subNavVisible, setSubNavVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);

  const subNavRef = useRef(null);

  useEffect(() => {
    // Add event listener to the window object
    window.addEventListener('click', handleOutsideClick);

    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSubNav = () => {
    setSubNavVisible(!subNavVisible);
    setArrowRotation(!arrowRotation);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Stop propagation of the click event
    toggleSubNav();
  };

  const handleOutsideClick = (event) => {
    // Check if the click event occurred outside the subNav
    if (subNavRef.current && !subNavRef.current.contains(event.target)) {
      setSubNavVisible(false);
      setArrowRotation(false);
    }
  };

  const arrowImage = window.innerWidth <= 768 ? outArrowRed : outArrow;

  return (
    <div className="App">
      <nav>
        <div className="barOne">
          <div className="name">
            <div className="logo"></div>
            <h1 id="parth">
              parth
              <br />
              barthwal
            </h1>
            <ul id="nav">
              <li>
                <span>home</span>
              </li>
              <li id="projects" onClick={handleButtonClick}>
                <span>projects</span>
                <img
                  src={downArrow}
                  alt="downArrow"
                  className={arrowRotation ? 'rotate' : ''}
                />
                <ul
                  ref={subNavRef}
                  className={`subNav ${subNavVisible ? 'visible' : ''}`}
                >
                  <div className="spacer"></div>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <li>
                    <div className="projectBox"></div>
                  </li>
                  <div className="spacer"></div>
                </ul>
              </li>
              <li>
                <span>parth</span>
              </li>
            </ul>
          </div>
          <div className="ctaC">
            <button className="cta">
              Contact Me
              <img
                src={arrowImage}
                alt="downArrow"
                className={arrowRotation ? 'rotate' : ''}
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="contentBoxes">
        <div className="content" id="main">
          <div className="contentsInside">
            <div className="badges">
              <img src={omori} className="badge" alt="omori" />
              <img
                src={undertale}
                className="badge" id="undertale"
                alt="undertale"
              />
              <img src={punpun} className="badge" alt="punpun" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
