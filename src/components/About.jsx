import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

import { Row, Col, Card, Button } from "react-bootstrap";

import foto from "../assets/img/me.jpg";
import curriculum from "../assets/curriculum/curriculumEn.pdf";
import { ModalContact } from "./ModalContact.jsx";

export function About() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Col>
        <Col style={{ height: "4em" }}></Col>
        <Card className="shadow-sm border-0 mb-5">
          <Card.Body className="p-4">
            <Row>
              <Col className="col-12 text-center">
                <img src={foto} className="img-thumbnail rounded-circle border-secondary" style={{ height: 200 }} alt="..." />
              </Col>
              <Col className="col-12 text-center mb-4">
                <div className="text-secondary display-6">
                  <b>James Osorio Florez</b>
                </div>
              </Col>
              <Col className="col-12 text-start  mb-3 text-secondary">
                <i className="bi bi-mortarboard text-dark"></i> Analisis y desarrollo de sistemas de información
              </Col>
              <Col className="col-12 text-start  text-secondary">
                <i className="bi bi-geo-alt text-dark"></i> Rionegro, Colombia
              </Col>
              <Col className="col-12 text-start  my-4 text-secondary">
                <small>
                  <b>I like to develop systems of information, create solutions, and face problems that help me be a better developer.</b>
                </small>
                <br></br>
                <small>
                  {" "}
                  <b>
                    Experience developing custom web applications and macros in Excel. I enjoy working on the backend, but I've also been
                    developing from requirements to production.
                  </b>
                </small>
              </Col>
              <Col className="col-12 text-start  mb-4">
                <Button variant="primary" className="mx-1 btn-sm" href={curriculum} download="curriculumEn">
                  <i className="bi bi-download"></i> Curriculum
                </Button>
                <Button variant="primary" className="btn-sm" onClick={() => setModalShow(true)}>
                  <i className="bi bi-envelope-heart"></i> Contact me
                </Button>
              </Col>
              <Col className="col-6 text-end ">
                <a className="refereces" href="https://github.com/OssRezz" target="_blank" rel="noreferrer">
                  <i className="bi bi-github text-primary refereces" style={{ fontSize: "1.7em" }}></i>
                </a>
              </Col>
              <Col className="col-6 text-start">
                <a className="refereces" href="https://www.linkedin.com/in/OssRezz/" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin text-primary" style={{ fontSize: "1.7em" }}></i>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <ModalContact show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
