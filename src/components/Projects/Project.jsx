import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import polyhealth from "../../assets/polyhealth.png";
import "./Project.css";
function Project() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row className="row-customRow mt-5">
      <h3>PROJECTS</h3>

      <Col xs={12}>
        <Card style={{ width: "18rem" }} onClick={handleShow}>
          <Card.Img variant="top" src={polyhealth} />
          <Card.Body>
            <Card.Title>POLYHEALTH</Card.Title>
            <Card.Text>Final Capstone Project with Epicode</Card.Text>
            <Button className="btn_card">View Code</Button>
            <Button className="btn_card">View Demo</Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>POLYHEALTH </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={polyhealth} alt="poject cover" />
          React, Redux, PostrgeSQL, SpringBoot, JWT. Description Capstone Project di una clinica PolyHealth. Lo scopo è
          semplificare la prenotazione di terapie. Gli utenti possono scegliere tra molteplici terapie e molteplici sedi
          e prenotare
          <Button className="btn_card">View Code</Button>
          <Button className="btn_card">View Demo</Button>
        </Modal.Body>
      </Modal>
    </Row>
  );
}

export default Project;
