import React from "react"
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox"
import Button from "./Button"
import {AnimatedOnScroll} from "react-animated-css-onscroll"

export default function MyWork() {  
    let projecttabfirst=[
        {  
            id: '1',
            animate: '500',
            image: 'eventlify.png', 
            alt: 'Eventlify',
            title: 'Eventlify',
            imgOpen: '0',
            linkPage: 'https://www.eventlify.com/'
        },
        {  
            id: '2',
            animate: '1000',
            image: 'tdalal.png', 
            alt: 'Tdalal',
            title: 'Tdalal',
            imgOpen: '1',
            linkPage: 'https://tdalal.com.kw/en/'
        }, 
        {  
            id: '3',
            animate: '1500',
            image: 'ottu.png', 
            alt: 'Ottu',
            title: 'Ottu',
            imgOpen: '27',
            linkPage: 'https://www.ottu.com/en/'
        },  
        {  
            id: '4',
            animate: '500',
            image: 'da3aity.png', 
            alt: 'Da3aity',
            title: 'Da3aity',
            imgOpen: '3',
            linkPage: 'http://www.da3aity.com/'
        }, 
        {  
            id: '5',
            animate: '1000',
            image: 'nextgen.png', 
            alt: 'NextGen',
            title: 'NextGen',
            imgOpen: '4',
            linkPage: 'https://www.nextgenconnect.com/'
        },
        {  
            id: '6',
            animate: '1500',
            image: 'kn2021.png', 
            alt: 'Kn',
            title: 'Kn2021',
            imgOpen: '5',
            linkPage: '#'
        }, 
        {  
            id: '7',
            animate: '500',
            image: 'nf.png', 
            alt: 'Nf',
            title: 'National Fund',
            imgOpen: '6',
            linkPage: '#'
        }, 
        {  
            id: '8',
            animate: '1000',
            image: 'olshi.png', 
            alt: 'Olshi',
            title: 'Olshi',
            imgOpen: '7',
            linkPage: '#'
        },
        {  
            id: '9',
            animate: '1500',
            image: 'america-garden.png', 
            alt: 'America Gardens',
            title: 'America Gardens',
            imgOpen: '8',
            linkPage: 'https://americagardensusa.com/'
        },
        {  
            id: '10',
            animate: '500',
            image: 'aqarat.png', 
            alt: 'Aqarat',
            title: 'Aqarat',
            imgOpen: '0',
            linkPage: '#'
        },
        {  
            id: '11',
            animate: '1000',
            image: 'ee.png', 
            alt: 'Evalyn Elizabeth',
            title: 'Evalyn Elizabeth',
            imgOpen: '10',
            linkPage: 'https://www.evalynelizabeth.com/'
        },
        {  
            id: '12',
            animate: '1500',
            image: 'mtp.png', 
            alt: 'Michele Therese',
            title: 'Michele Therese',
            imgOpen: '11',
            linkPage: 'https://www.micheletherese.com/'
        }
    ]
    let projecttabsecond=[
        {  
            id: '1',
            animate: '500',
            image: 'tdalal.png', 
            alt: 'Tdalal',
            title: 'Tdalal',
            imgOpen: '0',
            linkPage: 'https://tdalal.com.kw/en/'
        },
        {  
            id: '2',
            animate: '1000',
            image: 'da3aity.png', 
            alt: 'Da3aity',
            title: 'Da3aity',
            imgOpen: '1',
            linkPage: 'http://www.da3aity.com/'
        },
        {  
            id: '3',
            animate: '1500',
            image: 'olshi.png', 
            alt: 'Olshi',
            title: 'Olshi',
            imgOpen: '2',
            linkPage: '#'
        },
        {  
            id: '4',
            animate: '500',
            image: 'ee.png', 
            alt: 'Evalyn Elizabeth',
            title: 'Evalyn Elizabeth',
            imgOpen: '3',
            linkPage: 'https://www.evalynelizabeth.com/'
        }  
    ]
    return (
        <section className="Work" id="work">
            <div className="container">
                <h4>My Works</h4>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All"> 
                        <SimpleReactLightbox> 
                            <SRLWrapper>         
                                <div className="row"> 
                                    {projecttabfirst.map((item,i)=>{
                                        return (
                                            <div className="col-lg-4 col-sm-6" key={item.id}>
                                                <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration={item.animate}>
                                                    <div className="card"> 
                                                        <div className="card__image">
                                                            <img src={require(`../assets/images/${item.image}`).default} alt={item.alt} className="img-fluid"/>
                                                        </div>
                                                        <div className="card__desc">
                                                            <div className="card__desc--title">
                                                                {item.title}
                                                            </div>
                                                            <div className="card__desc--actions">   
                                                                <Button props={item.imgOpen}/>
                                                                <a href={item.linkPage} className="btn btn-primary" target="_blank">
                                                                    <span>
                                                                        <FontAwesomeIcon icon={['fas', 'link']} />
                                                                    </span>
                                                                </a>
                                                            </div>  
                                                        </div>    
                                                    </div>
                                                </AnimatedOnScroll>
                                            </div>
                                        )
                                    })}
                                </div>   
                            </SRLWrapper>
                        </SimpleReactLightbox>   
                    </Tab>
                    <Tab eventKey="ecommerce" title="E-commerce">
                        <SimpleReactLightbox> 
                            <SRLWrapper>
                                <div className="row"> 
                                    {projecttabsecond.map((item,i)=>{
                                        return (
                                            <div className="col-lg-4 col-sm-6" key={item.id}>
                                                <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeInOut" animationInDuration={item.animate}>
                                                    <div className="card"> 
                                                        <div className="card__image">
                                                            <img src={require(`../assets/images/${item.image}`).default} alt={item.alt} className="img-fluid"/>
                                                        </div>
                                                        <div className="card__desc">
                                                            <div className="card__desc--title">
                                                                {item.title}
                                                            </div>
                                                            <div className="card__desc--actions">   
                                                                <Button props={item.imgOpen}/>
                                                                <a href={item.linkPage} className="btn btn-primary" target="_blank">
                                                                    <span>
                                                                        <FontAwesomeIcon icon={['fas', 'link']} />
                                                                    </span>
                                                                </a>
                                                            </div>  
                                                        </div>    
                                                    </div>
                                                </AnimatedOnScroll>
                                            </div>
                                        )
                                    })}
                                </div>   
                            </SRLWrapper>  
                        </SimpleReactLightbox>  
                    </Tab>
                </Tabs>   
            </div> 
        </section>
    )
}
