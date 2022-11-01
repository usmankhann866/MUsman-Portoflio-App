import React from "react";
import { Col, Row } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaFigma} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPowerbi,
  SiNetlify,
  SiLinux,
  SiVmware,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h4>Vs Code</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
        <h4>Power bi</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
        <h4>Figma</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
        <h4>Github</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h4>Netlify</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h4>Ubuntu</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
        <h4>Vmware</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
