import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { gsap } from "gsap";

import { useEffect } from "react";
import polyhealth from "../../assets/polyhealth.png";
import appMeteo from "../../assets/appMeteo.png";

import "./Project.css";
function Project({ animateProject }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    if (animateProject) {
      gsap.from(".projects", {
        duration: 4,

        x: +100,
        scrollTrigger: { trigger: ".App", scrub: 2, markers: false },
      });
    }
  }, [animateProject]);

  return (
    <Row className="row-simpleRow mt-5 projects">
      <h3 className="position-relative mb-5" style={{ maxWidth: "20%" }}>
        PROJECTS <span class="bottom"></span>
      </h3>

      <Col xs={12} className="d-flex">
        <Card style={{ width: "50%" }} onClick={handleShow1}>
          <Card.Img variant="top" src={polyhealth} />
          <Card.Body>
            <Card.Title className="fw-bolder">POLYHEALTH</Card.Title>
            <Card.Text>Capstone Project con Epicode</Card.Text>
            <Link to="https://github.com/eleonoramattera/PolyHealthCenter" target="_blank" rel="noreferrer">
              Visualizza codice
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "50%" }} onClick={handleShow2} className="">
          <Card.Img variant="top" src={appMeteo} />
          <Card.Body>
            <Card.Title className="fw-bolder">APP METEO</Card.Title>
            <Card.Text>BuildWeek con Epicode</Card.Text>
            <Link
              to="https://github.com/eleonoramattera/u3-w2-d5-progetto-settimanale"
              target="_blank"
              rel="noreferrer">
              Visualizza codice
            </Link>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bolder">POLYHEALTH </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={polyhealth} alt="poject cover" className="mb-2" />
          <h5>Tecnologie</h5>
          <p> React, Redux, PostrgeSQL, SpringBoot, JWT.</p>
          <h5>Description</h5>
          <p>
            Web app per la Clinica PolyHealth con l'obiettivo di semplificare il processo di prenotazione delle terapie.
            Gli utenti hanno la possibilità di scegliere tra diverse terapie e diverse sedi per effettuare le
            prenotazioni.
          </p>
          <Link to="https://github.com/eleonoramattera/PolyHealthCenter" target="_blank" rel="noreferrer">
            Visualizza codice
          </Link>
        </Modal.Body>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bolder">APP METEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={appMeteo} alt="poject cover" className="mb-2" />
          <h5>Tecnologie</h5>
          <p> React, React Hooks, React Router</p>
          <h5>Description</h5>
          <p>
            Applicazione meteorologica che consente agli utenti di cercare città e visualizzare le previsioni
            meteorologiche, comprese le temperature, per un massimo di cinque giorni.
          </p>
          <Link to="https://github.com/eleonoramattera/u3-w2-d5-progetto-settimanale" target="_blank" rel="noreferrer">
            Visualizza codice
          </Link>
        </Modal.Body>
      </Modal>
    </Row>
  );
}

export default Project;
