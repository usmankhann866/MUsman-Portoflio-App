import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import faceReg from "../../Assets/Projects/face4.jfif";
import htmlCode from "../../Assets/Projects/imageTohtml.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import restaurant from "../../Assets/Projects/Resturant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={htmlCode}
              isBlog={false}
              title="HTML CODE GENERATION FROM IMAGES WITH DEEP NEURAL NETWORKS"
              description="I have designed a static website to convert your image to HTML file.
              Just drop your image in tool and click on Generate Code button to get the html 
              code. Enter the filename with (.txt, .html etc) and download the file."
              
              ghLink="https://github.com/usmankhan866/HTML-Code-From-Images-With-Deep-Neural-Networks"
              demoLink="file:///G:/WEB%20DEVELOPMENT/PROJECTS/Image%20To%20HTML/index.html"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="KHPAL RESTURANT"
              description="A Resturant site build in HTML5, CSS3, Bootstrap4, Javascript.Khpal restaurant will provide the best dasi, national, and international foods with best possible tastes, sweets, and national and International drinks"
              ghLink="https://github.com/usmankhan866/Khpal-Resturant-Website"
              demoLink="file:///G:/WEB%20DEVELOPMENT/PROJECTS/Resturant%20Website/Main%20Page/index.html"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={faceReg}
              isBlog={false}
              title="ATTENDENCE SYSTEM THROUGH FACE RECOGNITION"
              description="It is an online Attendance System for employees, Students of any orginization.
               Those employees and students are present whose face are recognized by the system else
                are absent. It is a face recognition attendance system."
              ghLink="https://github.com/usmankhan866/Attendence-System-Through-Face-Recognition"
              demoLink=""              
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AIR QUALITY MONITORING USING AZURE IOT"
              description="Good quality of air is required to maintain good health conditions among the living environment. With an increasing air pollution, we developed an Advanced Air Quality Monitoring System using azure devices(Iot hub|Azure Stream Analytics|blob storage|power bi) and Raspberry Pi simulator. The system perform monitoring the air quality by considering parameters like temperature and humidity. Proposed system has Raspberry pi Simulator for connecting with IOT platform to pass the information regarding the pollutants (temperature and hunmidty)."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
