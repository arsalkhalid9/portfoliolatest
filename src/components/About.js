import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profilepic from '../assets/images/profile-pic.jpg';
import cv from '../assets/pdf/arsalCV.pdf';
import {AnimatedOnScroll} from "react-animated-css-onscroll"
export default function About() { 
    return (
        <section className="About" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInOut">
                            <div className="About__image">
                                <img src={profilepic} alt="profile-pic"/>
                            </div>
                        </AnimatedOnScroll>
                    </div>
                    <div className="col-md-9">
                        <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInOut">
                            <div className="About__desc">
                                <div className="About__desc--title"> 
                                    <h2>About Me</h2>
                                </div>
                                    <p>Building stable and maintainable codebases using bootstrap and jquery.
                                        Implementing a mobile-first approach to existing websites.
                                        Collaborating with designers to ensure designs were efficient and
                                        technically sound.
                                        Working directly with clients to develop technical solutions
                                        Conducting testing to identify bugs and UI improvements.
                                    </p> 
                                <div className="d-flex justify-content-between">
                                    <div className="About__desc--title"> 
                                        <h2>Contact Details</h2>
                                    </div>
                                    <a href={cv} className="btn btn-primary">
                                        <span>
                                            <FontAwesomeIcon icon={['fas', 'download']} />
                                            Download Resume
                                        </span>
                                    </a>
                                </div>
                                <ul>
                                    <li>Arsal Khalid</li>
                                    <li>H#114 Noor Street Habibullah Road, Lahore</li>
                                    <li>+92-305-4704034</li>
                                    <li>arsalkhalid99@gmail.com</li>
                                </ul>   
                            </div> 
                        </AnimatedOnScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}
