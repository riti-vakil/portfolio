import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp from "../assets/img/color-sharp2.png"
import TrackVisibility from 'react-on-screen';
import project from "../assets/img/project.jpg"

export const Projects = () => {
  const projects = [
    {
      imgUrl: project,
      title: "Social Sync",
      description: "Next.js, MongoDB, Node.js, Prisma ORM",
      gitHubUrl: "https://github.com/riti-vakil/Social-Sync",
    },
    {
      imgUrl: project,
      title: "Plant Guard",
      description: "PyTorch, Flask, HTML, CSS",
      gitHubUrl: "https://github.com/riti-vakil/PlantGuard",
    },
    {
      imgUrl: project,
      title: "Movie Meter",
      description: "React.js, Node.js, Express.js, MongoDB, PostMan, Docker",
      gitHubUrl: "https://github.com/riti-vakil/Movie-Reviews",
    },
    {
      imgUrl: project,
      title: "Music Recommendation System",
      description: "Python (Pandas, Matplotlib, NLTK), Streamlit",
      gitHubUrl: "https://github.com/riti-vakil/Music-Recommendation-System",
    },
    {
        imgUrl: project,
        title: "Movie-Reviews Application",
        description: "React.js, Node.js, Express.js, MongoDB, PostMan, Docker",
        gitHubUrl: "https://github.com/riti-vakil/Movie-Reviews",
    },
    {
        imgUrl: project,
        title: "Music Recommendation System",
        description: "Python (Pandas, Matplotlib, NLTK), Streamlit",
        gitHubUrl: "https://github.com/riti-vakil/Music-Recommendation-System",
    },
    {
        imgUrl: project,
        title: "CrytoVerse",
        description: "React.js, Node.js, CoinRanking and Bing-News API",
        gitHubUrl: "https://github.com/riti-vakil/Crypto-App",
    },
    {
        imgUrl: project,
        title: "Hotel Management System",
        description: "Python, MySQL, Tkinter",
        gitHubUrl: "https://github.com/riti-vakil/Hotel-Management-System",
    },
    {
        imgUrl: project,
        title: "CRUDS form",
        description: "React.js, MongoDB, Node.js, Express.js",
        gitHubUrl: "https://github.com/riti-vakil/CRUDS-Form",
    },
    {
        imgUrl: project,
        title: "Static Site Generator",
        description: "Python, Jinja, HTML, CSS",
        gitHubUrl: "https://github.com/riti-vakil/Static-Site-Generator",
    }
  ];
  const firstTabProjects = projects.slice(0, 3);
  const secondTabProjects = projects.slice(3);
  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-center">
                          {firstTabProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {secondTabProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp} alt='bg'></img>
  </section>
  )
}
