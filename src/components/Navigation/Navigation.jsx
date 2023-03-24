import React from 'react';
import "./Navigation.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";

const Navigation = () => {
  const [ activeNav, setActiveNav ] = useState("#");
  return (
    <nav>
      <a href="#" 
        onClick={ ()=> setActiveNav("#") } 
        className={ activeNav === "#" ? "active" : "" }><AiTwotoneHome /></a>
      <a href="#about" 
        onClick={ () => setActiveNav("#about") } 
        className={ activeNav === "#about" ? "active" : "" }><BsFillPersonLinesFill /></a>
      <a href="#experience" 
        onClick={ () => setActiveNav("#experience") } 
        className={ activeNav === "#experience" ? "active" : "" }><BiBook /></a>
      <a href="#portfolio" 
        onClick={ () => setActiveNav("#portfolio") } 
        className={ activeNav === "#portfolio" ? "active" : "" }><RiServiceLine /></a>
      <a href="#contact" 
        onClick={ () => setActiveNav("#contact") } 
        className={ activeNav === "#contact" ? "active" : "" }><AiOutlinePhone /></a>
    </nav>
  )
}

export default Navigation