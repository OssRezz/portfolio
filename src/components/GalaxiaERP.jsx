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
                <h5 className="text-center mb-5 text-dark">Galaxia ERP</h5>
                <h6 className="text-center mb-1 text-dark">Description</h6>
                <Col className="mb-3 text-center mt-2">
                  GymPlus es un Gimnasio con 4 sedes en la ciudad de Medellin,
                  departamento de Antioquia.{" "}
                  <b>
                    <em>
                      El objectivo de la aplicacion es permitir a sus usuarios
                      reservar una sus clases de analisis(Spinning)
                    </em>
                  </b>
                </Col>
                <Col className="text-center">
                  La aplicacion permite administrar los mapas de cada sede,
                  clases, profesores, reservas, asistencias y cargar los
                  usuarios con planes activos al sistema desde un archivo de
                  excel para que estos puedan usar su identificacion al momento
                  de reservar una bicicleta.
                </Col>
                <h6 className="text-center mb-1 mt-3 text-dark">
                  Technologies
                </h6>
                <Col className="mb-1 text-center  mt-2 mb-2">
                  Aplicacion desarrollada en Laravel, Las tecnologias
                  implementadas son <b className="text-secondary">html</b>,{" "}
                  <b className="text-secondary">Bootstrap</b> para los estilos y
                  maquetacion, <b className="text-secondary">JavaScript puro</b>{" "}
                  y <b className="text-secondary">Ajax</b> para interatuar con
                  las acciones del usuario. Base de datos MySQL
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