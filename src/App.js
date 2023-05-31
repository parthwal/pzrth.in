import './App.css';
import outArrow from './assets/SVG/arrow_thickOut.svg';
import downArrow from './assets/SVG/arrow_down.svg';
import React, { useState } from 'react';

function App() {
  const [subNavVisible, setSubNavVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);

  const toggleSubNav = () => {
    setSubNavVisible(!subNavVisible);
    setArrowRotation(!arrowRotation);
  };

  const handleButtonClick = () => {
    toggleSubNav();
  };

  return (
    <div className="App">
      <nav>
        <div className="barOne">
          <div className="name">
            <div className="logo"></div>
            <h1 id='parth'>parth<br />barthwal</h1>
          <ul id="nav">
            <li>home</li>
            <li id="projects" onClick={handleButtonClick}>projects
              <img
                src={downArrow}
                alt='downArrow'
                className={arrowRotation ? 'rotate' : ''}
              />
              <ul className={`subNav ${subNavVisible ? 'visible' : ''}`}>
                <div className='spacer'></div>
                <li><div className='projectBox'></div></li>
                <li><div className='projectBox'></div></li>
                <li><div className='projectBox'></div></li>
                <li><div className='projectBox'></div></li>
                <li><div className='projectBox'></div></li>
                <li><div className='projectBox'></div></li>
                <div className='spacer'></div>

              </ul>
            </li>
            <li>parth</li>
          </ul>
        </div>

        <div className="cta">
          <button className="cta">Contact Me<img src={outArrow} alt='arrow' /></button>
        </div>
    </div>
      </nav >
    </div >
  );
}

export default App;
