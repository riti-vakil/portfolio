import React from 'react'
import { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

 const NavBar = () => {
  const handleContactClick = () => {
    const email = 'ritivakil3@gmail.com';
    const subject = 'Contact from My Website';
    const body = 'Hello Riti, I wanted to get in touch with you...';

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY> 50) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll" , onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink= (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">riti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink==='home' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink==='skills' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#experience" className={activeLink==='experience' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('experience')}>Experience</Nav.Link>
          <Nav.Link href="#project" className={activeLink==='project' ? 'active-navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/riti-vakil'><img src={navIcon1} alt='navIcon'/></a>
                <a href='https://github.com/riti-vakil'><img src={navIcon2} alt='navIcon'/></a>
                <a href='https://www.instagram.com/ritivakil/'><img src={navIcon3} alt='navIcon'/></a>
            </div>
            <button className='vvd' onClick={handleContactClick}><span>Let's Connect</span></button>
        </span>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default NavBar
