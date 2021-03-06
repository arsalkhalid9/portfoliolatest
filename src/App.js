import React ,{useEffect , useState} from "react";
// import * as React  from 'react';
import logo from './assets/images/my-logo.png';
import About from './components/About'
import Resume from './components/Resume'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Home from './components/Home'
import './App.css';
import "./assets/scss/styles.scss";
import Main from './components/Main'
import Uikit from "./components/Uikit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollToTop from "react-scroll-to-top";

function App() {

	const [scroll , setScroll] = useState(window.pageYOffset);
	const [sticky , setSticky] = useState(false);

	useEffect(()=>{
		window.addEventListener('scroll',()=>{
			setScroll(window.pageYOffset);
			if (scroll > 120) {
				setSticky(true)
			}else{
				setSticky(false)
			}
		})
	},[scroll])

	const [click, setClick] = useState(false);
	const handleClick = () =>setClick(!click);

	const sections = document.querySelectorAll('section');
	const items = document.querySelectorAll('li');
	let current = '';
	window.addEventListener('scroll', ()=>  {
		sections.forEach(section => {	
			let sectionTop = section.offsetTop;
			let sectionHeight = section.clientHeight;
			if(window.pageYOffset >= sectionTop - (sectionHeight)/6){
				current = section.getAttribute('id');
			}	
		})
		items.forEach( li => {
			li.classList.remove('active');
			if(li.classList.contains(current)){
				li.classList.add('active');
			}
		})
	})
  return (
    <>
    <div className="App">
		<header className={`${sticky ? "sticky":''}`}>
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
						<a className="logo" href="#">
							<img src={logo} alt="logo" />
						</a>
					<nav>
						<ul className={click ? "nav-menu active" : "nav-menu"}> 
							<li className="home active">
								<a href="#home" onClick={handleClick}>Home</a>
							</li>
							<li className="about">
								<a href="#about" onClick={handleClick}>About</a>
							</li>
							<li className="resume">
								<a href="#resume" onClick={handleClick}>Resume</a>
							</li>
							<li className="work">
								<a href="#work" onClick={handleClick}>MyWork</a>
							</li>
							<li className="contact">
								<a href="#contact" onClick={handleClick}>Contact</a>
							</li>
						</ul>
						<div className="menu-icon" onClick={handleClick}>
							<i className= {click ? "fas fa-times":"fas fa-bars"}></i>
						</div>
					</nav>
				</div>
			</div>
		</header>
    	
  		<Home />
		<About />
		<Resume />
		<MyWork />
		<Contact />
		<footer>
			<ul>
				<li>
					<a href="https://www.facebook.com/arsalkhalid99/">
						<FontAwesomeIcon icon={['fab', 'facebook-f']} />
					</a>	
				</li>
				<li>
					<a href="https://www.linkedin.com/in/arsal-khalid-780424157/">
						<FontAwesomeIcon icon={['fab', 'linkedin-in']} />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/arsalyyy/">
						<FontAwesomeIcon icon={['fab', 'instagram']} />
					</a>
				</li>
			</ul>
			<ScrollToTop smooth />
		</footer>
    </div>
    </>
  );
}

export default App;

