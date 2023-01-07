import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import galaxiaImg from "../assets/img/galaxia.png";

import acceso_1 from "../assets/img/acceso/acceso-1.png";
import acceso_2 from "../assets/img/acceso/acceso-2.png";
import acceso_3 from "../assets/img/acceso/acceso-3.png";
import acceso_4 from "../assets/img/acceso/acceso-4.png";

export function Acceso() {
  return (
    <>
      <Col className="col-12 col-lg-6 d-none d-lg-block">
        <Carousel className="shadow-sm mb-3">
          <Carousel.Item>
            <img src={acceso_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_4} className="d-block w-100" alt="First slide" />
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
      <Col className="col-12 col-lg-6 my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary text-center">
                <h5 className="text-center mb-5 text-dark">Control of access</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 mt-2">
                  Galaxia Seguridad Ltda. is a security company with various national (Colombia) services.{" "}
                  <b>
                    <em>The goal of this project is to provide an application for access control as a service.</em>
                  </b>
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  The application was developed in the programming language <b className="text-secondary">PHP</b> with the architectural
                  pattern <b className="text-secondary">MVC.</b> The technologies implemented are <b className="text-secondary">HTML</b> ,{" "}
                  <b className="text-secondary">Bootstrap 4</b> for styles and layoud. <b className="text-secondary">JQuery</b> to send and
                  receive information from the controllers. <b className="text-secondary">MySQL</b> for database.
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
      <Col className="col-12 col-lg-6 d-block d-sm-block d-md-block d-lg-none mb-3">
        <Carousel className="shadow-lg mb-3">
          <Carousel.Item>
            <img src={acceso_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={acceso_4} className="d-block w-100" alt="First slide" />
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
