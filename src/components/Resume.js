import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
export default function Resume() {

    let progressbar=[
        {  
            id:'1',
            title: 'Html5',
            now: 90
        },
        {  
            id:'2',
            title: 'Css3',
            now: 90
        },  
        {  
            id:'3',
            title: 'Bootstrap',
            now: 90
        },
        {  
            id:'4',
            title: 'Jquery',
            now: 60
        },
        {  
            id:'5',
            title: 'Javascript',
            now: 50
        },
        {  
            id:'6',
            title: 'Web Accessibility 508',
            now: 60
        },
        {  
            id:'7',
            title: 'Sass and Scss',
            now: 85
        },
        {  
            id:'8',
            title: 'W3c Validation',
            now: 100
        },
        {  
            id:'9',
            title: 'Transitions / Animation',
            now: 80
        },
        {  
            id:'10',
            title: 'Adobe Photoshop/xd/figma',
            now: 80
        },
        {  
            id:'11',
            title: 'Vue.js',
            now: 60
        }, 
        {  
            id:'12',
            title: 'React.js',
            now: 50
        }, 
        {  
            id:'13',
            title: 'EmailTemp',
            now: 90
        }
    ]
    return (
        <section className="Resume" id="resume">
            <div className="container">
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Education</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h2>Virtual University</h2> 
                            <i>Bachelors in Information Technology</i>
                            <ul>
                                <li>2016-2020</li>
                            </ul>
                            <p>Graduated with 3.25 CGPA</p>

                            <h2>M.A.O College</h2> 
                            <i>Intermediate (ICS)</i>
                            <ul>
                                <li>2013-2014</li>
                            </ul>
                            <p>Second Division</p>
                             
                            <h2>Govt MC Higher Secondary School Allama Iqbal Road Faisalabad</h2> 
                            <i>Matriculation (Science Group)</i>
                            <ul>
                                <li>2012-2013</li>
                            </ul>
                            <p>Second Division</p>   
                        </div>
                    </div>
                </div>
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Work</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h2>Logics Drive (Pvt Ltd)</h2> 
                            <i>UI/UX Designer</i>
                            <ul>
                                <li>2017-Present</li>
                            </ul>
                            <p>Presented UX designs and solutions to senior staff, evangelizing for user-centric design decisions. Created site layout and user interface using HTML and CSS practices. Developed user-oriented visuals and features using front-end languages, including HTML,to increase site traffic. Collaborated with in-house web designers to create sleek and innovative UI design.</p>
         
                            <h2>Final Year Project</h2> 
                            <i>Trip Karigar (Web Application)</i>
                            <ul>
                                <li>Sublime Text Editor, Notepad ++ or PHP Storm, Xampp, WampServer etc. Core PHP and HTML</li>
                            </ul>
                            <p>Develop a tourism website in which Admin will create new trip/tour plans i.e. 1 day trip to 7 days tour in different northern areas of Pakistan. Admin will also respond to the custom trip/tour queries by the users i.e. Queries regarding quote, itinerary, road map and services which will be provided. <br/>
                                Users can view trips which are already created by the Admin. User can book trip/tour, Users can fiter categorically i.e. 1 day trip, 3 day Tour etc. or by location wise i.e. Naran Tours, Hunza Tours etc. <br/>
                                Users can get a Quote for their Custom trip/tour by filling a form in which they will give all required information i.e. Departure Place, Arrival Place, Number of Days, Nimber of Person, Services required etc. 
                            </p>  

                            <h2>Accomplishments</h2> 
                            <i>A list of accomplishments during my final years at Comsats</i>
                            <ul>
                                <li>Winner of Telenor Hackathon 2018 (Second place).</li>
                                <li>Winner of Start-up weekend Lahore 2018 held at Virtual University (First place).</li>
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="ourDetails">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="ourDetails__title">
                                <span>Skills</span>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p>The following are my skills with level of expertise</p>
                            <div className="mySkills">
                                {progressbar.map((item,i)=>{
                                    return (
                                        <div className="mySkills__progress" key={item.id}>
                                            <h6>{item.title}</h6>
                                            <ProgressBar animated now={item.now} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}