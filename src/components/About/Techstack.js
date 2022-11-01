import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillHtml5 } from "react-icons/ai";
import {FaAws, FaFigma} from "react-icons/fa";
// import {TbNetwork} from "react-icons/bi";

import {
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiJqueryLogo,
  DiMysql,
  // DiPython,
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
        <h4>Html5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h4>Css3</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h4>Bootstrap4</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>Javascript</h4>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      <h4>ReactJs</h4>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <h4>Jquery</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h4>Mysql</h4>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        <h4>Microsoft Azure</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <h4>Aws</h4>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
