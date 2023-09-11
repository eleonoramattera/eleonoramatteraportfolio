import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import epicode from "../../assets/epicode.jpg";
import pcacademy from "../../assets/pcacademy.png";
import unina from "../../assets/unina.png";
import { gsap } from "gsap";

import { useEffect } from "react";

import "./Training.css";

function Training({ animateTraining }) {
  useEffect(() => {
    if (animateTraining) {
      gsap.from(".training", {
        duration: 4,
        x: -100,
        scrollTrigger: { trigger: "body", scrub: 2, markers: false },
      });
    }
  }, [animateTraining]);

  return (
    <Row className="row-simpleLargeRow mt-5  training px-4">
      <h3 className="position-relative" style={{ maxWidth: "20%" }}>
        TRAINING<span class="bottom"></span>
      </h3>
      <Col xs={12} className="d-flex flex-column my-4 ">
        <Carousel fade>
          <Carousel.Item>
            <figure>
              <img src={epicode} alt="logo epicode" />
            </figure>
            <Carousel.Caption>
              <h5>
                Full-stack Developer <br /> 2022-2023
              </h5>
              <p>
                Corso intensivo full-stack con un approccio che combina teoria e pratica, mi ha permesso di applicare le
                conoscenze apprese attraverso progetti reali, sia individualmente che in collaborazione con altri,
                consentendmi di acquisire esperienza diretta in ogni aspetto dello sviluppo web full-stack.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <figure>
              <img src={pcacademy} alt="logo pc academy" />
            </figure>
            <Carousel.Caption>
              <h5>
                Master in Grafica Editoriale, Web Design & eCommerce <br /> 2020-2021
              </h5>
              <p>
                Corso multidisciplinare che mi ha permesso di coniugare le competenze di grafica e web design offrendomi
                una formazione completa che abbraccia entrambi questi campi creativi e complementari.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <figure>
              <img src={unina} alt="logo unina" />
            </figure>
            <Carousel.Caption>
              <h5>
                Laurea triennale in Culture Digitali e della Comunicazione <br /> 2016-2020
              </h5>
              <p>
                Percorso di studi che ha rappresentato un solido punto di partenza per la mia carriera nel web design e
                in campi correlati. Durante il corso di laurea, ho acquisito competenze e conoscenze che sono rilevanti
                per il web design e la comunicazione digitale.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Training;
