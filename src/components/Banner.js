import React from 'react'
import { useEffect } from 'react'

import { Col, Container,Row } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import Typed from "typed.js"
export const Banner = () => {
    
    useEffect(() => {
        const options = {
        strings: ['Software Engineer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        };
    
        const typed = new Typed('.multiple-text', options);
    
        return () => {
        typed.destroy();
        };
    }, []);


    const onButtonClick = () => {
        fetch('Riti Vakil-Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
        
                    <h1>{`Hi I'm Riti Vakil `}</h1>
                    <h1>A <span className='multiple-text'></span></h1>
                    <p>An avid and inquisitive learner with a passion to solve complex problems using technical and logical aspects. Quick learner with a strong aptitude for critical thinking, creativity, collaboration and leadership.</p>
                    <p>Whether I'm working on a challenging project or exploring new frontiers, I'm always looking for ways to push the boundaries of what's possible and create something truly unique.</p>
                    <button onClick={onButtonClick}>Download Resume</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='headerimg'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

