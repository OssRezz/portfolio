import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card, Carousel, Badge } from "react-bootstrap";
import serviunixImg from "../assets/img/serviunix.png";

import whatsapp_img from "../assets/img/whatsapp_api/whatsapp_api.png";

export function Whatsapp() {
  return (
    <>
      <Col className="col-12 col-lg-6  my-1 my-md-5">
        <Card className="col-12  bg-light border-0">
          <Card.Body>
            <Row>
              <Col className="col-12  text-secondary">
                <h5 className="text-center mb-5 text-dark">Meta WhatsApp Business</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  Integration with WhatsApp meta business.
                  <b>
                    <em>
                      {" "}
                      The objective of the application is to send messages to WhatsApp with the meta business api.
                    </em>
                  </b>
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">Technologies</h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Application created with <b className="text-secondary">PHP</b>. The technologies implemented are{" "}
                  <b className="text-secondary">HTML, Bootstrap 5 </b>for the styles and layout,{" "}
                  <b className="text-secondary">pure JavaScript</b> and <b className="text-secondary">Ajax</b> to
                  interact with the actions of the user.
                </Col>
                <Col className="text-center">
                  <small>
                    <Badge bg="danger">PHP</Badge>
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
                      WhatsApp Business
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
            <img src={whatsapp_img} className="d-block w-100" alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Col className="text-secondary d-flex  align-items-center justify-content-center">
          <img src={serviunixImg} style={{ height: 20 }} alt="Flores Isabelita" />
          <div className="mx-2 text-secondary">
            <small>
              <b>Serviunix | HACK A BOSS</b>
            </small>
          </div>
        </Col>
      </Col>
    </>
  );
}
