import React, { useRef } from 'react';
import './Contact.css';
import Aos from 'aos';
import emailjs from '@emailjs/browser';


function Contact() {
  Aos.init();


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9rc3epo', 'template_8zg3z3o', form.current, {
        publicKey: 'w9pfB1H17A7pYkxi9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log("message sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <section id="contact">
                <div className='contact'>
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Contact Me</h2>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">For more information contact me</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
                        <label>Name : </label>
                        <input type="text" name="user_name" placeholder='Enter Name' id="name" required />
                        <label>Email : </label>
                        <input type="email" name="user_email" placeholder='Enter Email' id="email" required />
                        <label>Message : </label>
                        <input type="text" name="message" placeholder='Message' id="message" />
                        
                        <button>Submit</button>
                    </form>
                </div>
           </section>
    </>
  );
}
export default Contact;

