import React from 'react';
import "./Header.css";
import CTA from "./CTA";
import HeaderImg from "../../assets/header_img.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section>
      <header>
        <div className="container header__container">
          <h5>Hello, I am</h5>
          <h2>Vugar Bakhshalizade</h2>
          <h5 className="text-light">Junior Frontend Developer / Web Designer</h5>
          <CTA />
          <HeaderSocials />
          <div className="header-image">
            <img src={HeaderImg} alt="web_development_items" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </section>
  )
}

export default Header;