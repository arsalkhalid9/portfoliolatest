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
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
export default function MyWork() {
    const onInit = () => {    
    };
    return (
        <section className="Work" id="work">
            <div className="container">
                <h4>My Works</h4>
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        <div className="row"> 
                            <div className="col-lg-4 col-sm-6"> 
                                <div className="card"> 
                                    <div className="card__image">
                                        <img src={aqarat} alt="aqarat" className="img-fluid" />

                                    </div>
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            Aqarat
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href={aqarat} className="btn btn-primary" data-src={aqarat}>
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                        <img src={kn} alt="kn" className="img-fluid"/>
                                    </div>
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                        Kn 2021
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href={kn} className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                        <img src={nf} alt="nf" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                        National Fund
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href={nf} className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                        <img src={da3aity} alt="da3aity" className="img-fluid"/>

                                    </div>
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            Da3aity
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href={da3aity} className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                        <img src={ottu} alt="ottu" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            Ottu
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://www.ottu.com/en/" className="btn btn-primary">
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
                                        <img src={nextgen} alt="nextgen" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            NextGen
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://www.nextgenconnect.com/" className="btn btn-primary">
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
                                        <img src={americagarden} alt="america-garden" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            America Gardens
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://americagardensusa.com/" className="btn btn-primary">
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
                                        <img src={eventlify} alt="eventlify" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                            Eventlify
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://www.eventlify.com/" className="btn btn-primary">
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://www.evalynelizabeth.com/" className="btn btn-primary">
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
                                        <img src={mtp} alt="mtp" className="img-fluid"/>
                                    </div> 
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                        Michele Therese 
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
                                            <a href="https://www.micheletherese.com/" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'link']} />
                                                </span>
                                            </a>
                                        </div>  
                                    </div>   
                                </div>
                            </div>
                        </div>  
                    </LightGallery>

                    </Tab>
                    <Tab eventKey="ecommerce" title="E-commerce">
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                        <img src={olshi} alt="olshi" className="img-fluid"/>
                                    </div>
                                    <div className="card__desc">
                                        <div className="card__desc--title">
                                        Olshi
                                        </div>
                                        <div className="card__desc--actions"> 
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                                            <a href="#" className="btn btn-primary">
                                                <span>
                                                    <FontAwesomeIcon icon={['fas', 'images']} />
                                                </span>
                                            </a>
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
                    </Tab>
                </Tabs>
            </div>
        </section>
    )
}