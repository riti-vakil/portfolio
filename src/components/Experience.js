import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from "../assets/img/color-sharp.png"
import logo from '../assets/img/saraltech.jpg'
export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Experience</h2>
            
            <div className="experience-item">
              <div className="experience-logo">
                <img src={logo} alt="Company Logo" />
              </div>
              <div className="experience-details">
                <div className="experience-title">Saral Tech</div>
                <div className="experience-role">Full Stack Developer</div>
                <div className="experience-duration">May 2023- August 2023</div>
                <div className="experience-description">
                Developed a website using HTML, CSS, and JavaScript to ensure cross-browser compatibility and
mobile responsiveness, collaborated with the design team to enhance the website's UI/UX and curated content to cater to the user needs to improve
the website's search engine ranking and visibility.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
