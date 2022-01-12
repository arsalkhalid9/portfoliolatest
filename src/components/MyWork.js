import React from "react"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import aqarat from '../assets/images/aqarat.png'
import kn from '../assets/images/kn2021.png'
import nf from '../assets/images/nf.png'
import da3aity from '../assets/images/da3aity.png'
import olshi from '../assets/images/olshi.png'
import tdalal from '../assets/images/tdalal.png'
import ottu from '../assets/images/ottu.png'
import nextgen from '../assets/images/nextgen.png'
import americagarden from '../assets/images/america-garden.png'
import eventlify from '../assets/images/eventlify.png'
import evalynelizabeth from '../assets/images/ee.png'
import mtp from '../assets/images/mtp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox"
import Button from "./Button"
import {AnimatedOnScroll} from "react-animated-css-onscroll"


export default function MyWork() {  
    return (
        <>
            <section className="Work" id="work">
                <div className="container">
                    <h4>My Works</h4>
                    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                        <Tab eventKey="all" title="All"> 
                            <SimpleReactLightbox> 
                                <SRLWrapper>         
                                    <div className="row"> 
                                        <div className="col-lg-4 col-sm-6">
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1500">
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={aqarat} alt="aqarat" className="img-fluid" id="1"/>
                                                    </div>
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Aqarat
                                                        </div>
                                                        <div className="card__desc--actions">   
                                                            <Button props={0}/>
                                                            <a href="#" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>    
                                                </div>
                                            </AnimatedOnScroll>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1000">
                                                <div className="card"> 
                                                    <div  className="card__image">
                                                        <img src={kn} alt="kn" className="img-fluid"/>
                                                    </div>
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Kn2021
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={1}/>
                                                            <a href="#" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>    
                                                </div> 
                                            </AnimatedOnScroll>
                                        </div>
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="500">
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={nf} alt="nf" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            National Fund
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={2}/>
                                                            <a href="#" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1500"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={da3aity} alt="da3aity" className="img-fluid"/>
                                                    </div>
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Da3aity
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={3}/>
                                                            <a href="http://www.da3aity.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>    
                                                </div>
                                            </AnimatedOnScroll>  
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1000"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={olshi} alt="olshi" className="img-fluid"/>
                                                    </div>
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Olshi
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={4}/>
                                                            <a href="#" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>       
                                                </div>
                                            </AnimatedOnScroll> 
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="500"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={tdalal} alt="tdalal" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Tdalal
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={5}/>
                                                            <a href="https://tdalal.com.kw/en/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1500">  
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={ottu} alt="ottu" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Ottu
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={6}/>
                                                            <a href="https://www.ottu.com/en/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1000"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={nextgen} alt="nextgen" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            NextGen
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={7}/>
                                                            <a href="https://www.nextgenconnect.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="500"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={americagarden} alt="america-garden" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            America Gardens
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={8}/>
                                                            <a href="https://americagardensusa.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" isVisible={true} animationInDuration="1500"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={eventlify} alt="eventlify" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Eventlify
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={9}/>
                                                            <a href="https://www.eventlify.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                                </AnimatedOnScroll>
                                        </div> 
                                        <div className="col-lg-4 col-sm-6"> 
                                            <AnimatedOnScroll animationIn="fadeInUp" animationInDuration="1000"> 
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={evalynelizabeth} alt="ee" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Evalyn Elizabeth
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={10}/>
                                                            <a href="https://www.evalynelizabeth.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div> 
                                        <div className="col-lg-4 col-sm-6">
                                            <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration="500" animateOnMount="false">  
                                                <div className="card"> 
                                                    <div className="card__image">
                                                        <img src={mtp} alt="mtp" className="img-fluid"/>
                                                    </div> 
                                                    <div className="card__desc">
                                                        <div className="card__desc--title">
                                                            Michele Therese 
                                                        </div>
                                                        <div className="card__desc--actions"> 
                                                            <Button props={11}/>
                                                            <a href="https://www.micheletherese.com/" className="btn btn-primary">
                                                                <span>
                                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                                </span>
                                                            </a>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </AnimatedOnScroll>
                                        </div> 
                                    </div>
                                </SRLWrapper>
                            </SimpleReactLightbox>   
                        </Tab>
                        <Tab eventKey="ecommerce" title="E-commerce">
                            <SimpleReactLightbox> 
                                <SRLWrapper>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6"> 
                                            <div className="card"> 
                                                <div className="card__image">
                                                    <img src={da3aity} alt="da3aity" className="img-fluid"/>
                                                </div>
                                                <div className="card__desc">
                                                    <div className="card__desc--title">
                                                        Da3aity
                                                    </div>
                                                    <div className="card__desc--actions"> 
                                                        <Button props={0}/>
                                                        <a href="http://www.da3aity.com/" className="btn btn-primary">
                                                            <span>
                                                                <FontAwesomeIcon icon={['fas', 'link']} />
                                                            </span>
                                                        </a>
                                                    </div>  
                                                </div>    
                                            </div> 
                                        </div> 
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card"> 
                                                <div className="card__image">
                                                    <img src={olshi} alt="olshi" className="img-fluid"/>
                                                </div>
                                                <div className="card__desc">
                                                    <div className="card__desc--title">
                                                    Olshi
                                                    </div>
                                                    <div className="card__desc--actions"> 
                                                        <Button props={1}/>
                                                        <a href="#" className="btn btn-primary">
                                                            <span>
                                                                <FontAwesomeIcon icon={['fas', 'link']} />
                                                            </span>
                                                        </a>
                                                    </div>  
                                                </div>       
                                            </div>     
                                        </div>
                                        <div className="col-lg-4 col-sm-6"> 
                                            <div className="card"> 
                                                <div className="card__image">
                                                    <img src={tdalal} alt="tdalal" className="img-fluid"/>
                                                </div> 
                                                <div className="card__desc">
                                                    <div className="card__desc--title">
                                                    Tdalal
                                                    </div>
                                                    <div className="card__desc--actions"> 
                                                        <Button props={2}/>
                                                        <a href="https://tdalal.com.kw/en/" className="btn btn-primary">
                                                            <span>
                                                                <FontAwesomeIcon icon={['fas', 'link']} />
                                                            </span>
                                                        </a>
                                                    </div>  
                                                </div>   
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6"> 
                                            <div className="card"> 
                                                <div className="card__image">
                                                    <img src={evalynelizabeth} alt="ee" className="img-fluid"/>
                                                </div> 
                                                <div className="card__desc">
                                                    <div className="card__desc--title">
                                                        Evalyn Elizabeth
                                                    </div>
                                                    <div className="card__desc--actions"> 
                                                        <Button props={3}/>
                                                        <a href="https://www.evalynelizabeth.com/" className="btn btn-primary">
                                                            <span>
                                                                <FontAwesomeIcon icon={['fas', 'link']} />
                                                            </span>
                                                        </a>
                                                    </div>  
                                                </div>   
                                            </div>
                                        </div> 
                                    </div>
                                </SRLWrapper>  
                            </SimpleReactLightbox>  
                        </Tab>
                    </Tabs>   
                </div> 
            </section> 
        </>
    )
}
