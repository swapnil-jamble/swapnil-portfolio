    import React from 'react';
import './Project.css';
import Aos from 'aos';


function Project(){
    Aos.init();
    return(
        <>
            <section id="project">
                <div className='project'>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Projects</h2>
                    <div className='project-cards'>
                        <div className='project-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
                            <img src="https://tse1.mm.bing.net/th?id=OIP.my7DDbmoRJ64Y-cNf4-I7QHaDk&pid=Api&P=0&h=180" alt="project-img" />
                            <div>
                                <h4>Personal Portfolio</h4>
                                <a href="#">Live Demo<i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <img style={{ height: "243px", width: "auto" }}  src="https://repository-images.githubusercontent.com/200318206/978d6f00-88dd-11ea-8727-1449bd91edc6" alt="project-img" />
                            <div>
                                <h4>Weather Application</h4>
                                <a href="https://weather-app-swapnil-jamble.vercel.app/" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="700">
                            <img style={{ height: "262px"}}  src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="project-img" />
                            <div>
                                <h4>Mock Interview Application</h4>
                                <a href="http://myinterview.epizy.com/" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsPtL6zMy8b-Ee7tGhjCdKX7U04vdpRllESobZ3j0MYQ&s" alt="project-img" />
                            <div>
                                <h4>Calculator Application</h4>
                                <a href="https://calculator-app-swapnil-jamble.vercel.app/" target='_blank'>Live Demo <i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;
