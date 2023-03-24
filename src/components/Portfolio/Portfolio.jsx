import React from 'react';
import "./Portfolio.css";
import allstarsit from "../../assets/allstarsit.png";
import backroads from "../../assets/backroads.png";
import creativeDesign from "../../assets/creativeDesign.png";
import teaStation from "../../assets/teaStation.png";
import loopstudio from "../../assets/loopstudio.png";
import clipboard from "../../assets/clipboard.png";

const data = [
  {
    id: 1,
    image: allstarsit,
    title: "AllStarsIT",
    github: "https://github.com/VugarFrontEnd",
    demo: "https://allstarsit.netlify.app/"
  }, {
    id: 2,
    image: backroads, 
    title: "Backroads Travel Company",
    github: "https://github.com/VugarFrontEnd/tailwindcss_projects/tree/main/3.%20Backroads%20Travel%20Company",
    demo: "https://tailwindcss-backroads.netlify.app/"
  }, {
    id: 3,
    image: creativeDesign,
    title: "Creative Design",
    github: "https://github.com/VugarFrontEnd/websites/tree/main/design_website",
    demo: "https://vugar-site-green.netlify.app/"
  }, {
    id: 4,
    image: teaStation,
    title: "Tea Station",
    github: "https://github.com/VugarFrontEnd/websites/tree/main/tea_station_project",
    demo: "https://vugar-tea-station.netlify.app/"
  }, {
    id: 5,
    image: loopstudio,
    title: "Loopstudio",
    github: "https://github.com/VugarFrontEnd/tailwindcss_projects/tree/main/2.%20Loopstudios%20Website",
    demo: "https://tailwindcss-loopstudio.netlify.app/"
  }, {
    id: 6,
    image: clipboard,
    title: "Clipboard",
    github: "https://github.com/VugarFrontEnd/tailwindcss_projects/tree/main/1.%20Clipboard%20Website",
    demo: "https://tailwindcss-clipboard.netlify.app/"
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
                <article key={ id } className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={ image } alt={ title } />
                  </div>
                  <div className="portfolio__item__content">
                    <h3>{ title }</h3>
                    <a href={ github } target="_blank" className='btn'>GitHub</a>
                    <a href={ demo } className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
                </article>
              )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;