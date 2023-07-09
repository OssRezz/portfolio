import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Col, Card } from "react-bootstrap";
import "../assets/css/skills.css";
//
import jsImg from "../assets/img/js.png";
import phpImg from "../assets/img/php.png";
import laravelImg from "../assets/img/laravel.png";
import reactImg from "../assets/img/react.png";
// import reactNativeImg from "../assets/img/reactNative.png";
import vbaImg from "../assets/img/excel.png";
import jqueryImg from "../assets/img/jquery.png";
import mysqlImg from "../assets/img/mysql.png";
import bootstrapImg from "../assets/img/bootstrap.svg";
import cssImg from "../assets/img/css.svg";
import htmlImg from "../assets/img/html.svg";
import gitImg from "../assets/img/git.png";
import vueImg from "../assets/img/vue.png";
import scrumImg from "../assets/img/scrum.png";
import linuxImg from "../assets/img/linux.png";

export function Skills() {
  return (
    <>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={phpImg} style={{ height: 40 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>php</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={laravelImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>Laravel</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={jsImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>JavaScript</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={reactImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>React.js</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={reactImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>React Native</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={vueImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            <div style={{ whiteSpace: "nowrap" }}>Vue.js</div>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={jqueryImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            Jquery
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={vbaImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            vba
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={mysqlImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            MySQL
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={bootstrapImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            Bootstrap
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={cssImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            CSS
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={htmlImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            HTML
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={gitImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            Git
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={linuxImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            Linux
          </Card.Footer>
        </Card>
      </Col>
      <Col className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mb-5">
        <Card
          style={{ width: "10em" }}
          className="tecnologies shadow-sm  border-0"
        >
          <Card.Body className="d-flex justify-content-center align-items-center pb-0">
            <img src={scrumImg} style={{ height: 70 }} alt="..." />
          </Card.Body>
          <Card.Footer className="bg-white text-center border-0  text-secondary">
            Scrum / Agile
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
