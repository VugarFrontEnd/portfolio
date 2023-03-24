import React from 'react';
import "./Experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandFigma } from "react-icons/tb";
import { SiAdobe } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h5>Frontend Development</h5>

          <div className="frontend__skills">
            <div className="frontend__skills_column__one">
              <div className="frontend__skill">
                <AiFillHtml5 className='skill__icon' />
                <div className="skill__content">
                  <h2>HTML</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="frontend__skill">
                <FaCss3Alt className='skill__icon'/>
                <div className="skill__content">
                  <h2>CSS</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="frontend__skill">
                <TbBrandJavascript className='skill__icon'/>
                <div className="skill__content">
                  <h2>JavaScript</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
            </div>
            
            <div className="frontend__skills_column__two">
              <div className="frontend__skill">
                <SiTailwindcss className='skill__icon'/>
                <div className="skill__content">
                  <h2>TailwindCSS</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="frontend__skill">
                <BsFiletypeScss className='skill__icon'/>
                <div className="skill__content">
                  <h2>SCSS</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="frontend__skill">
                <FaReact className='skill__icon'/>
                <div className="skill__content">
                  <h2>React.JS</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="experience__web__design">
          <h5>Web Design</h5>

          <div className="design__skills">
            <div className="design__skills_column__one">
              <div className="design__skill">
                <TbBrandFigma className='skill__icon'/>
                <div className="skill__content">
                  <h2>Figma</h2>
                  <h5>Intermediate</h5>
                </div>
              </div>
              <div className="design__skill">
                <SiAdobe className='skill__icon'/>
                <div className="skill__content">
                  <h2>Adobe Illustrator</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="design__skill">
                <SiCanva className='skill__icon'/>
                <div className="skill__content">
                  <h2>Canva</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
            </div>
            
            <div className="design__skills_column__two">
              <div className="design__skill">
                <SiAffinitydesigner className='skill__icon'/>
                <div className="skill__content">
                  <h2>Responsive Design</h2>
                  <h5>Profecient</h5>
                </div>
              </div>
              <div className="design__skill">
                <SiAdobephotoshop className='skill__icon'/>
                <div className="skill__content">
                  <h2>Adobe Photoshop</h2>
                  <h5>Intermediate</h5>
                </div>
              </div>
              <div className="design__skill">
                <SiAdobepremierepro className='skill__icon'/>
                <div className="skill__content">
                  <h2>Adobe PremierPro</h2>
                  <h5>Intermediate</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience