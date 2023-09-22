import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { gsap } from "gsap";

import { useEffect } from "react";
import appMeteo from "../../assets/appMeteo.png";
import "./Project.css";

function Project({ animateProject }) {
  const [show, setShow] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

  useEffect(
    () => {
      if (animateProject && window.innerWidth >= 768) {
        gsap.from(".projects", {
          duration: 4,

          x: +100,
          scrollTrigger: { trigger: ".App", scrub: 2, markers: false },
        });
      }
    },
    [animateProject],
    window.innerWidth >= 768
  );

  return (
    <Row className="row-customSmallRow my-5 projects ">
      <h3 className="position-relative mb-5">
        PROJECTS <span class="bottom"></span>
      </h3>

      <Col xs={12} lg={6}>
        <Card onClick={handleShow2} className="mt-5 mt-lg-0">
          <Card.Img variant="top" src={appMeteo} />
          <Card.Body>
            <Card.Title className="fw-bolder">APP METEO</Card.Title>
            <Card.Text>APP METEO</Card.Text>
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

      <Modal show={show} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bolder">APP METEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={appMeteo} alt="poject cover" className="mb-2" />
          <h5>Tecnologie</h5>
          <p> React, React Hooks, React Router</p>
          <h5>Descrizione</h5>
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
