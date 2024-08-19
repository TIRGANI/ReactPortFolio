import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";

import smartCity from "../assets/img/project-img6.png";
import sourcing from "../assets/img/project-img7.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Smart City Application",
      description:
        "The main objective of this project is to design and deploy an efficient complaint management platform that streamlines the reporting process for citizens while enhancing the responsiveness of municipal authorities...",
      imgUrl: smartCity,
    },
    {
      title: "Sourcing Application",
      description:
        "A smart solution that allows you to build a trustworthy inner hierarchy, instant talent and transparency, hiring managers and employers... based on React js Framwork , python ...",
      imgUrl: sourcing,
    },
    {
      title: "Smart Wattering Application",
      description:
        "An intelligent irrigation management app based on Spring Boot java Framwork and JavaScript Ajax To be inducted with Github ,Docker, and with a mobile version.. ",
      imgUrl: projImg3,
    },
    {
      title: "Parking Application",
      description:
        "The design and construction of a stand-alone intelligent parking management system.",
      imgUrl: projImg1,
    },
    {
      title: "Scan QR code Application",
      description:
        "A multi-platform app created by Flutter, lets you scan and create any QR code, bar code ...",
      imgUrl: projImg1,
    },
    {
      title: "Freelance Project",
      description: "E-Commerce Web and mobile Applications",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>I am also maintaining some projects such as:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
