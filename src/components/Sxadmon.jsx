import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import serviunixImg from "../assets/img/serviunix.png";

import sxadmon_1 from "../assets/img/sxadmon/login.png";
import sxadmon_2 from "../assets/img/sxadmon/visitas.png";
import sxadmon_3 from "../assets/img/sxadmon/billing.png";
import sxadmon_4 from "../assets/img/sxadmon/changes_billing.png";

export function SXAdmon() {
  return (
    <>
      <Col className="col-12 col-lg-6 d-none d-lg-block">
        <Carousel className="shadow-sm mb-3">
          <Carousel.Item>
            <img src={sxadmon_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_4} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <img src={serviunixImg} style={{ height: 20 }} alt="Flores Isabelita" />
          <div className="mx-2 text-secondary">
            <small>
              <b>Serviunix</b>
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
        <Card className="col-12 bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary text-center">
                <h5 className="text-center mb-5 text-dark">SXAdmon</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 mt-2">
                  Serviunix is a company that provides different services like infrastructure management, security and
                  custom applications for enterprises.{" "}
                  <b>
                    <em>
                      The objective of the application is to management the administrative processes of the company.
                    </em>
                  </b>
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Developed in the framework of <b className="text-secondary">PHP Laravel</b>, with the database
                  <b className="text-secondary"> MySQL, JavaScript</b> and <b className="text-secondary">Ajax</b> to
                  render content in real time and interact with the user, <b className="text-secondary">Bootstrap 5</b>{" "}
                  for the styles and design of the page.
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
                    <Badge bg="secondary" className="mx-1">
                      SOAP
                    </Badge>
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
        <Carousel className="shadow-sm mb-3">
          <Carousel.Item>
            <img src={sxadmon_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={sxadmon_4} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <img src={serviunixImg} style={{ height: 20 }} alt="Flores Isabelita" />
          <div className="mx-2 text-secondary">
            <small>
              <b>Serviunix</b>
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
