import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import outArrow from './assets/SVG/arrow_out.svg';
import outArrowRed from './assets/SVG/arrow_out_red.svg';
import downArrow from './assets/SVG/arrow_down.svg';
import omori from './assets/figma/omori.png';
import undertale from './assets/figma/undertale.png';
import punpun from './assets/figma/punpun.png';
import ig from './assets/figma/ig.png';
import be from './assets/figma/be.png';
import dscrd from './assets/figma/dscrd.png';
import at from './assets/figma/at.png';
import spotify from './assets/figma/spotify.png';
import clipboard from './assets/SVG/clipboard.svg';
import clipboardRed from './assets/SVG/clipboardRed.svg';

function App() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const getNowPlaying = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: `Bearer BQCJ_LttMpwaAUHwERR1K0TKvsfekD8xvokYbscN6_hdyNt4k30ddsSc7GbBrB1iQDMAZu5CKykbqyppT9R87ZFnV_f815-i8Xh8iTogfELur0ocShFlXRgiHntJ0KZMNeeRNRuDb334fGuxPWpJILRgTeljm5qEuHttbGgWz5V0-SWrTKZIA7lM`,
        },
      });

      if (response.status === 204) {
        setNowPlaying(null); // No track is currently playing
      } else {
        setNowPlaying(response.data); // Set the currently playing track
      }
    } catch (error) {
      console.error('Error fetching currently playing track:', error);
    }
  };
  useEffect(() => {
    getNowPlaying();
  }, []);

  const [subNavVisible, setSubNavVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);
  const subNavRef = useRef(null);
  const handleSubNavClick = (event) => {
    event.stopPropagation(); // Stop propagation of the click event
  };
  useEffect(() => {
    const subNavContainer = subNavRef.current;

    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (event) => {
      isMouseDown = true;
      startX = event.pageX - subNavContainer.offsetLeft;
      scrollLeft = subNavContainer.scrollLeft;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (event) => {
      if (!isMouseDown) return;
      event.preventDefault();
      const x = event.pageX - subNavContainer.offsetLeft;
      const walk = x - startX;
      subNavContainer.scrollLeft = scrollLeft - walk;
    };

    subNavContainer.addEventListener('mousedown', handleMouseDown);
    subNavContainer.addEventListener('mouseup', handleMouseUp);
    subNavContainer.addEventListener('mouseleave', handleMouseUp);
    subNavContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      subNavContainer.removeEventListener('mousedown', handleMouseDown);
      subNavContainer.removeEventListener('mouseup', handleMouseUp);
      subNavContainer.removeEventListener('mouseleave', handleMouseUp);
      subNavContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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

  const [buttonText, setButtonText] = useState('Contact Me');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCTAClick = () => {
    const email = 'him@pzrth.in';
    const subject = 'Regarding Projects';
    const body = 'Hello,\n\nI would like to discuss some projects with you.\n\nBest regards,\n[Your Name]';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);

    // Copy the email address to the clipboard
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Update the button text and image
    setButtonText('Copied to Clipboard');
    setButtonClicked(true);

    // Open the mail client with the mailto link
    window.location.href = mailtoLink;
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
              <li className="">
                <span className="mouseHover"><a>home</a></span>
              </li>
              <li
                className=""
                id="projects"
                onClick={handleButtonClick}
              >
                <span className="mouseHover"><a>projects</a></span>
                <img
                  src={downArrow}
                  alt="downArrow"
                  id='downArrow'
                  className={arrowRotation ? 'rotate' : ''}
                />
                <ul
                  ref={subNavRef}
                  className={`subNav ${subNavVisible ? 'visible' : ''}`}
                  onClick={handleSubNavClick} // Add click event handler to the subNav
                >
                  <div className="spacer"></div>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <li>
                    <div className="projectBox comingSoon hoverInteract"><span className='comingSoonText'>Coming Soon</span></div>
                  </li>
                  <div className="spacer"></div>
                </ul>
              </li>
              <li className="">
                <span className="mouseHover"><a>parth</a></span>
              </li>
            </ul>
          </div>
          <div className="ctaC">
            <button className="cta mouseHover" onClick={handleCTAClick}>
              {buttonText}
              {window.innerWidth <= 768 && buttonClicked ? (
                <img src={clipboardRed} alt="clipboard" />
              ) : (
                <img src={window.innerWidth <= 768 ? outArrowRed : outArrow} alt="clipboard" />
              )}
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
      <footer>
        <div className="left">
          <div className="socials">
            <img className='socialItem hoverInteract' id="ig" src={ig} alt='ig' />
            <img className='socialItem hoverInteract' id="be" src={be} alt='be' />
            <img className='socialItem hoverInteract' id="discord" src={dscrd} alt='discord' />
            <img className='socialItem hoverInteract' id="at" src={at} alt='email' />
          </div>
          <div className="contact">
            <span id="emailMe">talk to me</span>
            <span id="email" style={{ cursor: 'alias' }}>him@pzrth.in</span>
          </div>
        </div>
        <div className="right">
          <div className="nowPlaying">
            <img className='socialItem hoverInteract' id="spotify" src={spotify} alt='spotifyIcon' />
            <span>Now Playing</span>
          </div>
          {nowPlaying ? (
            <div className="spotifyImport">
              <span className='spotifyData' id='songArtist'>{nowPlaying.item.artists[0].name} <a href='https://open.spotify.com/user/barthwal.parth' target='_blank'><img src={outArrowRed} alt='alt-red-arrow' /></a></span>
              <span className='spotifyData' id='songName'>{nowPlaying.item.name}</span>
            </div>
          ) : (
            <div className="spotifyImport">
              <span className='spotifyData' id='songArtist'>Artist <a href='https://open.spotify.com/user/barthwal.parth' target='_blank'><img src={outArrowRed} alt='alt-red-arrow' /></a></span>
              <span className='spotifyData' id='songName'>Name</span>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default App;
