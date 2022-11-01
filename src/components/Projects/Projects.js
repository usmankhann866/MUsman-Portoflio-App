import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Iot from "../../Assets/IOT_Project.png";
import faceReg from "../../Assets/Projects/face4.jfif";
import htmlCode from "../../Assets/Projects/imageTohtml.jpg";
import restaurant from "../../Assets/Projects/Resturant.png";
import Note from "../../Assets/note_keeper.png";

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
              demoLink="https://imagetohtml.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="KHPAL RESTURANT"
              description="A Resturant site build in HTML5, CSS3, Bootstrap4, Javascript.Khpal restaurant will provide the best dasi, national, and international foods with best possible tastes, sweets, and national and International drinks"
              ghLink="https://github.com/usmankhan866/Khpal-Resturant-Website"
              demoLink="https://khpalrestaurant.netlify.app/"
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
              ghLink="https://github.com/"
              demoLink=""
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Iot}
              isBlog={false}
              title="AIR QUALITY MONITORING USING AZURE IOT"
              description="Good quality of air is required to maintain good health conditions among the living environment.
               With an increasing air pollution, we developed an Advanced Air Quality Monitoring System using 
               azure devices(Iot hub|Azure Stream Analytics|blob storage|power bi) and Raspberry Pi simulator."
              ghLink="https://github.com/"
              demoLink="https://iotprojecct.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={Note}
              isBlog={false}
              title="NOTE KEEPER EDITOR"
              description="This is a simple imitation of Google Keep made with React.
                           It uses React Hooks, state, props, and array mapping to allow for the creation
                           and deletion of notes."
              ghLink="https://github.com/usmankhann866/Note-Keeper-App"
              demoLink="http://localhost:3002/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
