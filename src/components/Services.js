import React from 'react';
import './Services.css';
import Aos from 'aos';


function Services(){
    Aos.init();
    return(
        <>
         <section id="services">
            <div className='services'>
                <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Education</h2>
                <div className='services-cards'>
                    <div className='services-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">
                    <i className='fa-solid fa-code' id="icon"></i>
                    <h3>Qspider</h3>
                    <p>Pune, Hadpasar</p>
                    <p>Full Stack Java Development</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                <div className='services-card' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                    <i class="fa-solid fa-computer" id="icon"></i>
                    <h3>Asian College, Science and Commerce</h3>
                    <p>Narhe, Pune</p>
            
                    <p>Master in Computer Science</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                <div className='services-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="100">
                    <i class="fa-solid fa-user-graduate" id="icon"></i>
                    <h3>Vidya Pratishthan Arts, Commerce & Science</h3>
                    <p>Baramati, Pune</p>
          
                    <p>Bachelor in Computer Science</p>
                    
                    <a href="#">
                        Read More <i className='fa-solid fa-arrow-right-long'></i>
                    </a>
                </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Services;
