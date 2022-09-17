import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";
import { Button, Modal, FloatingLabel, Form, ToastContainer, Toast } from "react-bootstrap";
import axios from "axios";

export function ModalContact(props) {
  const [state, setState] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [show, setShow] = useState(false);
  const [toastContent, setToastContent] = useState({
    color: "",
    message: "",
    title: "",
  });
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const enviarMessage = async () => {
    if (validate(state.email) === false || validate(state.subject) === false || validate(state.message) === false) {
      setToastContent({
        ...toastContent,
        color: "dark",
        message: "All field are required",
        title: "Information",
      });
      setShow(true);
      return;
    }
    if (isValidEmail(state.email) !== true) {
      setToastContent({
        ...toastContent,
        color: "dark",
        message: "An email is required",
        title: "Information",
      });
      setShow(true);
      return;
    }

    await axios
      .post("https://ossrezz.me/apigalaxia/public/api/emails/create", { state })
      .then((response) => {
        setToastContent({
          ...toastContent,
          color: "dark",
          message: "The message was sended, i will contact you soon",
          title: "Information",
        });
        setState({
          ...state,
          email: "",
          message: "",
          subject: "",
        });
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setToastContent({
          ...toastContent,
          color: "danger",
          message: JSON.stringify(error),
          title: "Information",
        });
        setShow(true);
      });
  };

  const validate = (validar) => {
    if (validar === undefined) {
      return false;
    } else if (validar === null) {
      return false;
    } else if (validar === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">GET IN TOUCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => handleChangeText("email", e.target.value)}
              value={state.email}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSubject" label="Subject" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={(e) => handleChangeText("subject", e.target.value)}
              value={state.subject}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingMessage" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Message here"
              style={{ height: "100px" }}
              onChange={(e) => handleChangeText("message", e.target.value)}
              value={state.message}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" className="rounded-pill" onClick={props.onHide}>
            <i className="bi bi-x-circle-fill"></i>
          </Button>
          <Button variant="primary" className="rounded-pill" onClick={enviarMessage}>
            <i className="bi bi-send-fill"></i>
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-end" className="p-3 position-fixed">
        <Toast show={show} bg={toastContent.color} onClose={() => setShow(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{toastContent.title}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            <p>{toastContent.message}</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
