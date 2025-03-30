import React from "react";
import './Skills.css';
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiJava,
    DiMysql,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiVisualstudiocode, SiExpress, SiSpringboot, SiSpring, SiHibernate, SiOracle, SiMysql } from "react-icons/si";
import Aos from "aos";


function Skills() {
    Aos.init();
    return (
        <>
            <section id="skills">
                <div className="skills">
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="100">Professional Skills</h2>
                    <div className="skill-cards">

                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">
                            <DiJava />  
                            <span className="tech-name">Java</span> 
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
                            <SiSpring />
                            <span className="tech-name">Spring Framework</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="900">
                            <SiSpringboot />
                            <span className="tech-name">Spring Boot</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">
                            <SiMysql />
                            <span className="tech-name">MySQL</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1100">
                            <SiOracle />
                            <span className="tech-name">Oracle</span>
                        </div>

                       
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
                            <DiHtml5 />
                            <span className="tech-name">HTML</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">
                            <DiCss3 />
                            <span className="tech-name">CSS</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <DiJavascript1 />
                            <span className="tech-name">JavaScript</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">
                            <FaBootstrap />
                            <span className="tech-name">BootStrap</span>
                        </div>
                        <div className="tech-icons" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
                            <DiReact />
                            <span className="tech-name">React</span>
                        </div>
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;
