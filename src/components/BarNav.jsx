import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export function BarNav() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
      className="shadow-sm"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="text-primary">
          OssRezz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">
              <i className="bi bi-person"></i> About
            </Nav.Link>
            <Nav.Link href="#skills">
              <i className="bi bi-code-square"></i> Skills
            </Nav.Link>
            <Nav.Link href="#experience">
              <i className="bi bi-briefcase"></i> Experience
            </Nav.Link>
            <Nav.Link href="#education">
              <i className="bi bi-mortarboard"></i> Education
            </Nav.Link>
            <Nav.Link href="#projects">
              <i className="bi bi-magic"></i> Projects
            </Nav.Link>
          </Nav>
          {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
