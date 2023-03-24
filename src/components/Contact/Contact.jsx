import React from 'react';
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_onwtbn5', 'template_du5h3ls', form.current, 'oZkknil5S7tHWLSVi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vbakhshalizada2019@ada.edu.az</h5>
            <a href="mailto:vbakhshalizada2019@ada.edu.az" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vugar Bakhshalizade</h5>
            <a href="https://m.me/vugarsedefaysel" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+48) 726 378 449</h5>
            <a href="https://api.whatsapp.com/send?phone=48726378449" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={ form } onSubmit={ sendEmail } className='contact__form'>
          <input type="text" name='name' placeholder="Your name" required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message...' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact