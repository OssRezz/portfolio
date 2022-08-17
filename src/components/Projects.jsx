import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Cycling } from "./Cycling.jsx";
import { Latinco } from "./Latinco.jsx";
import { GalaxiaERP } from "./GalaxiaERP.jsx";
import { Acceso } from "./Acceso.jsx";

export function Projects() {
  return (
    <>
      <Col>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Cycling />
        </Row>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Latinco />
        </Row>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <GalaxiaERP />
        </Row>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Acceso />
        </Row>
      </Col>
    </>
  );
}
