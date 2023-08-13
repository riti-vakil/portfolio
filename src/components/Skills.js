import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import java from "../assets/img/meter1.svg"
import python from "../assets/img/meter3.svg"
import c from "../assets/img/c.png"
import html from "../assets/img/html.svg"
import css from "../assets/img/css.svg"
import react from "../assets/img/react.svg"
import node from "../assets/img/node.svg"
import mysql from "../assets/img/mysql.svg"
import mongo from "../assets/img/mongo.svg"
import express from "../assets/img/express.png"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
    return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My skills include frontend and backend development.<br></br>My coding languages include Java, Python and C.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={java} alt="java" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="c" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="python" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="sql" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="html" />
                                <h5>HTML</h5>
                            </div><div className="item">
                                <img src={css} alt="css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="mongo" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="node" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="express" />
                                <h5>Express.js</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt='bg' />
    </section>
    )
}

