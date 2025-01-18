import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import isabelitaImg from "../assets/img/isabelita.jpg";
import galaxiaImg from "../assets/img/galaxia.png";
import cdeImg from "../assets/img/cde.png";
import psicolImg from "../assets/img/psicol.jpeg";
import hackabossImg from "../assets/img/hackaboss.jpeg";
import serviunixImg from "../assets/img/serviunix.png";

export function Experience() {
  return (
    <>
      <Col>
        <Card className="shadow-sm bg-white border-0">
          <Card.Body>
            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">October 2023 - present</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={serviunixImg} style={{ height: 20 }} alt="Psicol" />
                    <div className="mx-2 text-secondary">Serviunix</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Head of Development</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>October 2023 - present</small>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">October 2023 - October 2024</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={hackabossImg} style={{ height: 20 }} alt="Psicol" />
                    <div className="mx-2 text-secondary">HACK A BOSS</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Fullstack Developer</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>October 2023 - October 2024</small>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">February 2023 - October 2023</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={psicolImg} style={{ height: 20 }} alt="Psicol" />
                    <div className="mx-2 text-secondary">Psicol</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Fullstack Developer</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>February 2023 - October 2023</small>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">April 2022 - February 2023</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={cdeImg} style={{ height: 20 }} alt="Flores Isabelita" />
                    <div className="mx-2 text-secondary">Clases De Excel</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Web Developer</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>April 2022 - February 2023</small>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">October 2021 - April 2022</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={galaxiaImg} style={{ height: 20 }} alt="Flores Isabelita" />
                    <div className="mx-2 text-secondary">Galaxia Seguridad Ltda.</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Web Developer</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>October 2021 - April 2022</small>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="d-flex align-items-center">
              <Col className="col-10 col-sm-5 d-flex  align-items-center text-end d-none d-lg-block">
                <small className="text-secondary">April 2021 - September 2021</small>
              </Col>

              <Col className="col-2 d-flex  align-items-center justify-content-center" style={{ minHeight: "7em" }}>
                <div className="vr d-flex justify-content-center align-items-center">
                  <i className="bi bi-circle-fill bi-lg" style={{ fontSize: "0.5rem", color: "#0D6EFD" }}></i>
                </div>
              </Col>

              <Col className="col-10 col-sm-5 d-flex  align-items-center">
                <Row className="text-secondary d-flex  align-items-center justify-content-start">
                  <Col className="col-12 text-secondary d-flex  align-items-center justify-content-start">
                    <img src={isabelitaImg} style={{ height: 20 }} alt="Flores Isabelita" />
                    <div className="mx-2 text-secondary">Flores Isabelita S.A.S</div>
                  </Col>
                  <Col className="col-12 text-secondary">
                    <div>
                      <small>
                        <b>Web Developer</b>
                      </small>
                    </div>
                  </Col>
                  <Col className="col-12  text-start d-block d-sm-block d-md-block d-lg-none text-secondary">
                    <small>April 2021 - September 2021</small>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
