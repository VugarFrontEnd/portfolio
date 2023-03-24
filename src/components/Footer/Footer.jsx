import React from 'react';
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
      <footer>
        <a href="#" className='footer__logo'>VB</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://linkedin.com/mwlite/in/vugar-bakhshalizade" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/VugarFrontEnd" target="_blank"><BsGithub /></a>
          <a href="https://twitter.com/therealvba" target="_blank"><BsTwitter /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Vugar Bakhshalizade. All rights reserved.</small>
        </div>
      </footer>
  )
}

export default Footer