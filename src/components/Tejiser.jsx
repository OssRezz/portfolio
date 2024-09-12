import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";

import tejiser_1 from "../assets/img/tejiser/login.png";
import tejiser_2 from "../assets/img/tejiser/instruments.png";
import tejiser_3 from "../assets/img/tejiser/survey_start.png";
import tejiser_4 from "../assets/img/tejiser/survey.png";
import tejiser_5 from "../assets/img/tejiser/reports.png";

export function Tejiser() {
  return (
    <>
      <Col className="col-12 col-lg-6  my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary">
                <h5 className="text-center mb-5 text-dark">TejiSer</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  Application for the faculty of Medicine of the University of Antioquia <b>(Udea)</b>.{" "}
                  <b>
                    <em> Comprehensive information system on mental health</em>.
                  </b>
                  <br />
                  The objective of the application is to make surveys of students of different universities in Colombia
                  about mental health, tobacco and psychoactive substances.{" "}
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Application created using the <b className="text-secondary">PHP Laravel </b>framework. The
                  technologies implemented are <b className="text-secondary">HTML, Bootstrap 5 </b>for the styles and
                  layout, <b className="text-secondary">pure JavaScript</b> and <b className="text-secondary">Ajax</b>{" "}
                  to interact with the actions of the user. For database <b className="text-secondary">MySQL</b>
                </Col>
                <Col className="text-center">
                  <small>
                    <Badge bg="danger">Laravel</Badge>
                  </small>
                  <small>
                    <Badge bg="warning" className="text-dark mx-1">
                      JavaScript
                    </Badge>
                  </small>
                  <small>
                    <Badge bg="primary">Bootstrap</Badge>
                  </small>
                  <small>
                    <Badge bg="info" className="text-dark mx-1">
                      MySQL
                    </Badge>
                  </small>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-12 col-lg-6">
        <Carousel className="shadow-sm mb-3">
          <Carousel.Item>
            <img src={tejiser_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={tejiser_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={tejiser_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={tejiser_4} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={tejiser_5} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <div className="mx-2 text-secondary">
            <small>
              <b>Freelance</b>
            </small>
          </div>
        </Col>
        <Col className="d-flex justify-content-center">
          <small>
            <Badge bg="secondary">This Project is in production</Badge>
          </small>
        </Col>
      </Col>
    </>
  );
}
