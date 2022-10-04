import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import {FaAws} from "react-icons/fa";
// import {TbNetwork} from "react-icons/bi";

import {
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
  DiMysql,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiMicrosoftazure,
  SiPytorch,
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
