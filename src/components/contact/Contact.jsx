
import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsChatText} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_brtobbc', 'template_zdqcaki', form.current, 'Vgi9snZOufiXCENT5')
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
              <article className='contact__option'>
                <AiOutlineMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>mijgonzekria@gmail.com</h5>
                <a href="mailto:mijgonzekria@gmail.com" target='_blank' rel='noreferrer'>Send an Email</a>
              </article>

              <article className='contact__option'>
                <BsChatText className='contact__option-icon'/>
                <h4>Text Message</h4>
                <h5>+12265771950</h5>
                <a href="sms:+1226-577-1950" target='_blank' rel='noreferrer'>Send a Message</a>
              </article>

              {/* <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+12265771950</h5>
                <a href="https://api.whatsapp.com/send?phone=+1226-577-1950" target='_blank' rel='noreferrer'>Send a Message</a>
              </article> */}
          </div>
          {/*END OF CONTACT OPTIONS*/}

          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send </button>
          </form>
       </div>
    </section>
  )
}

export default Contact

