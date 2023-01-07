import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import galaxiaImg from "../assets/img/galaxia.png";

import analisis_1 from "../assets/img/analisis/analisis-1.png";
import analisis_2 from "../assets/img/analisis/analisis-2.png";
import analisis_3 from "../assets/img/analisis/analisis-3.png";
import analisis_4 from "../assets/img/analisis/analisis-4.png";
import analisis_5 from "../assets/img/analisis/analisis-5.png";

export function GalaxiaERP() {
  return (
    <>
      <Col className="col-12 col-lg-6  my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary">
                <h5 className="text-center mb-5 text-dark">Galaxia Seguridad ERP</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  Galaxia Seguridad Ltda is a security company with different services.{" "}
                  <b>
                    <em>The objective of this project is to integrate every process of the company into an ERP.</em>
                  </b>
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Application created with the programming language <b className="text-secondary">PHP </b> with the architectural pattern{" "}
                  <b className="text-secondary">MVC.</b> The technologies implemented are <b className="text-secondary">HTML</b> and{" "}
                  <b className="text-secondary"> Bootstrap 5 </b> for the styles and layout of the page.{" "}
                  <b className="text-secondary"> JavaScript </b> and <b className="text-secondary"> Ajax </b>to interact with the users'
                  actions. We use Amazon Web Service <b className="text-secondary"> S3 </b> to store images, binary files and{" "}
                  <b className="text-secondary"> MySQL </b> for the database.
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
                  <small>
                    <Badge bg="secondary" className=" mx-1">
                      API
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
            <img src={analisis_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={analisis_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={analisis_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={analisis_4} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={analisis_5} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <img src={galaxiaImg} style={{ height: 20 }} alt="Flores Isabelita" />
          <div className="mx-2 text-secondary">
            <small>
              <b>Galaxia Seguridad Ltda</b>
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
