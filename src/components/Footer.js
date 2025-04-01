import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <section>
                <div className='footer'>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
                        <h1>Swapnil Jamble</h1>
                        <div>
                            <p>Do the best you can until you know better...</p>
                            <div className='social'>
                                <a href="https://www.linkedin.com/in/swapnil-jamble" target='_blank'><i className='fa-brands fa-linkedin-in'></i></a>
                                <a href="https://www.facebook.com/swapnil.jamble.3"><i className='fa-brands fa-facebook-f'></i></a>
                                <a href="https://www.instagram.com/swapnil.jamble/"><i className='fa-brands fa-instagram'></i></a>
                                <a href="https://github.com/swapnil-jamble" target='_blank'><i className='fa-brands fa-github'></i></a>
                              <a href="https://learnwithnil.blogspot.com" target='_blank'><i className='fa-brands fa-blogger'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="300">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Education</a>
                            </li>
                            <li>
                                <a href="#project">Projects</a>
                            </li>
                             <li>
                                <a href="http://myinterview.epizy.com">Book Mock Interview</a>
                            </li>
                        </ul>
                    </div>
                    <div className='links' data-aos="fade" data-aos-duration="1500" data-aos-delay="500">
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a href="#">Membership</a>
                            </li>
                            <li>
                                <a href="#">Privacy & Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Condition</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer;
