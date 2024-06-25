import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footersection">
      <div className="topfooter" data-aos="fade-up" data-aos-duration="2000">
        <div className="foterlogo">
          <div className="logofot">
            <img src="assets/reltime-logo-2.png" alt="Reltimelogo" />
          </div>
        </div>
        <div className="optionside">
          <div className="options">
            <h2>Ecosystem</h2>
            <ul>
              <li> Company</li>
              <li>Media centre</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div className="options">
            <h2>Social</h2>
            <ul>
              <li>Teligram</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div className="options">
            <h2>Further info</h2>
            <ul>
              <li>Privacy notice</li>
              <li>Download Reltime</li>
              <li>White paper</li>
              <li>About Reltime</li>
            </ul>
          </div>
          <div className="options">
            <h2>Reltime APP</h2>
            <ul>
              <li>IOS</li>
              <li>Android</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottomfooter" data-aos="fade-up" data-aos-duration="2000">
        <div className="botmicon">
          <a href="https://example.com">
            <FontAwesomeIcon icon={faTwitter} beat/>
          </a>
          <a href="https://example.com">
            <FontAwesomeIcon icon={faTelegram} beat/>
          </a>
          <a href="https://example.com">
            <FontAwesomeIcon icon={faYoutube} beat/>
          </a>
          <a href="https://example.com">
            <FontAwesomeIcon icon={faLinkedin} beat/>
          </a>
        </div>
        <div className="partners"> Reltime partner network covers over 160 countries  <span>see all of them</span></div>
        <div className="copyrights"> <FontAwesomeIcon icon={faCopy} /> Copyright 2023</div>
      </div>
    </div>
  );
}

export default Footer;
