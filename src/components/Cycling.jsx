import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge, ListGroup } from "react-bootstrap";
import cdeImg from "../assets/img/cde.png";

import cycling_1 from "../assets/img/cycling/cycling-1.png";
import cycling_2 from "../assets/img/cycling/cycling-2.png";
import cycling_3 from "../assets/img/cycling/cycling-3.png";
import cycling_4 from "../assets/img/cycling/cycling-4.png";
import cycling_5 from "../assets/img/cycling/cycling-5.png";

export function Cycling() {
  return (
    <>
      <Col className="col-12 col-lg-6  my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary">
                <h5 className="text-center mb-5 text-dark">GymPlus</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  GymPlus is a company with four headquarters in the city of Medellin, Antioquia.{" "}
                  <b>
                    <em> The objective of the application is to allow users to reserve a class of spinning(cycling).</em>
                  </b>
                </Col>
                <Col className="text-center col-12">
                  <b>The application allows management:</b>
                  <ListGroup className="bg-light">
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Bicycles map</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Spinning classes</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Teachers</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Reserves</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Asistences</small>
                    </ListGroup.Item>
                    <ListGroup.Item className="p-1 m-0 bg-light">
                      <small>Users with active plans (Excel spreadsheet generated from another application)</small>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Application created using the <b className="text-secondary">PHP Laravel </b>framework. The technologies implemented are{" "}
                  <b className="text-secondary">HTML, Boostrap 5 </b>for the styles and layout,{" "}
                  <b className="text-secondary">pure JavaScript</b> and <b className="text-secondary">Ajax</b> to interact with the actions
                  of the user. For database <b className="text-secondary">MySQL</b>
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
            <img src={cycling_1} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cycling_2} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cycling_3} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cycling_4} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cycling_5} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <img src={cdeImg} style={{ height: 20 }} alt="Flores Isabelita" />
          <div className="mx-2 text-secondary">
            <small>
              <b>Clases De Excel</b>
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
