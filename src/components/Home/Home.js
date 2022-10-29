import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/save 5.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const Home = ()=> {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!
                {/* There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mohammad Usman</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={3} style={{ paddingBottom: 20}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid-1"
                style={{ maxHeight: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
