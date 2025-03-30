import React from 'react';
import './About.css';
import Aos from 'aos';


function About() {
    Aos.init();
    return (
        <>
            <section id="about">
                <div className='about'>
                    <div className='about-info'>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">About me</p>
                        <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">Swapnil Jamble</h2>
                        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">Hi, I am <span>Full Stack<span> Java Developer</span></span></h3>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">I am a passionate Full-Stack Java Developer with expertise in building scalable and efficient web applications. My core strength lies in the Spring ecosystem, including Spring Boot, Spring Framework, Spring MVC, Spring Data JPA, and Hibernate. I specialize in developing RESTful APIs and architecting microservices to create robust, high-performing solutions.</p><br></br>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">With hands-on experience in backend development, database management, and cloud-native applications, I thrive in designing and implementing enterprise-grade software. I am always eager to learn new technologies and improve my skill set to deliver seamless and efficient digital experiences.</p> <br></br>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">Let's connect and build something great together!</p>
                        <a href="https://drive.google.com/file/d/1FxkRbT3ENGKzctyzsZ2kaFOsTTELKzRU/view" target="_blank"><button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="800">Download CV</button></a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
