import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Row, Col } from "react-bootstrap";

import { BarNav } from "./components/BarNav.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Experience } from "./components/Experience.jsx";
import { Education } from "./components/Education.jsx";
import { Projects } from "./components/Projects.jsx";
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Container fluid className="mb-5">
      <Row>
        <BarNav />
      </Row>
    </Container>
    <Container>
      <Row id="about">
        <About />
      </Row>
      <Row id="skills">
        <Col className="col-12 text-center py-5">
          <div className="display-6 text-secondary">
            <b>Skills</b>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-5">
        <Skills />
      </Row>
      <Row id="experience">
        <Col className="col-12 text-center py-5">
          <div className="display-6 text-secondary">
            <b>Experience</b>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center my-5">
        <Experience />
      </Row>
      <Row id="education">
        <Col className="col-12 text-center py-5">
          <div className="display-6 text-secondary">
            <b>Education</b>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center my-5">
        <Education />
      </Row>
      <Row id="projects">
        <Col className="col-12 text-center py-5">
          <div className="display-6 text-secondary">
            <b>Projects</b>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center my-5">
        <Projects />
      </Row>
      <Row className="d-flex justify-content-center my-5">
        <small className="text-muted text-center">
          <i className="bi bi-c-circle"></i> 2022 James Osorio Florez
        </small>
      </Row>
      <Col id="bmc-wbtn"></Col>
    </Container>
  </>
);
