import React from 'react';
import "./About.css";
import AboutImage from "../../assets/AboutImage.png";
import { FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ AboutImage } alt="webDevelopmentGraphicImage" />
          </div>
        </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__card__icon'/>
                <h5>Experience</h5>
                <small>3+ years</small>
              </article>
              <article className="about__card">
                <GiTechnoHeart className='about__card__icon'/>
                <h5>Tech Stack</h5>
                <small>React/Tailwind/SCSS</small>
              </article>
              <article className="about__card">
                <AiFillFolderOpen className='about__card__icon'/>
                <h5>Projects</h5>
                <small>8+ Completed</small>
              </article>
            </div>
            <p>I am Vugar Bakhshaliade, Fronted Developer and Web Designer with an experience of 3+ years. I have a passion to build user-centered web applications and am fond of single page applications that deliver exceptional experiences. </p>
            <a href="#contact" className="btn btn-primary">Contact Me!</a>
          </div>
      </div>
    </section>
  )
}

export default About