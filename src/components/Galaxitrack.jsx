import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import galaxiaImg from "../assets/img/galaxia.png";

import galaxia_1 from "../assets/img/galaxitrack/inicio.jpg";
import galaxia_2 from "../assets/img/galaxitrack/main.jpg";
import galaxia_3 from "../assets/img/galaxitrack/form.jpg";
import galaxia_4 from "../assets/img/galaxitrack/failed_QR.jpg";
import galaxia_5 from "../assets/img/galaxitrack/image.jpg";

export function GalaxiTrack() {
  return (
    <>
      <Col className="col-12 col-lg-6">
        <Carousel className=" mb-3">
          <Carousel.Item className="text-center">
            <img src={galaxia_1} className="shadow-sm border" alt="First slide" height={500} />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src={galaxia_2} className="shadow-sm border" alt="First slide" height={500} />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src={galaxia_3} className="shadow-sm border" alt="First slide" height={500} />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src={galaxia_4} className="shadow-sm border" alt="First slide" height={500} />
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <img src={galaxia_5} className="shadow-sm border" alt="First slide" height={500} />
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
      <Col className="col-12 col-lg-6  my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary">
                <h5 className="text-center mb-5 text-dark">GalaxiTrack</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  Galaxia Seguridad Ltda is a security company with different services.{" "}
                  <b>
                    <em>
                      {" "}
                      The objective of the application is to allow users and guards to register their activities into
                      Galaxia Seguridad ERP.
                    </em>
                  </b>
                </Col>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  The the user can take pictures from camera and gallery, get location (lat and long), scan QR codes and
                  more...
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Mobile application created with <b className="text-secondary">Expo React Native </b>framework. For the
                  styles and layout <b className="text-secondary">React Native Paper</b> and{" "}
                  <b className="text-secondary">CSS</b>. For database <b className="text-secondary">SQLite</b>.
                </Col>

                <Col className="text-center">
                  <small>
                    <Badge bg="danger">React Native</Badge>
                  </small>
                  <small>
                    <Badge bg="warning" className="text-dark mx-1">
                      Api REST
                    </Badge>
                  </small>
                  <small>
                    <Badge bg="primary">React Native Paper</Badge>
                  </small>
                  <small>
                    <Badge bg="info" className="text-dark mx-1">
                      SQLite
                    </Badge>
                  </small>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
