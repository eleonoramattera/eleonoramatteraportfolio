import { Row, Col } from "react-bootstrap";
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
    <Row className="row-customRow mt-5  training px-4">
      <h3>TRAINING</h3>

      <Col xs={12} className="d-flex flex-column my-4 ">
        <Col className="d-flex flex-column my-4 position-relative">
          <figure>
            <img src={epicode} alt="logo epicode" />
            <figcaption>
              <p>
                Full-stack Developer <br /> 2022-2023
              </p>
            </figcaption>
          </figure>
          <p className="border_p">
            Corso intensivo full-stack con un approccio che combina teoria e pratica, mi ha permesso di applicare le
            conoscenze apprese attraverso progetti reali, sia individualmente che in collaborazione con altri,
            consentendmi di acquisire esperienza diretta in ogni aspetto dello sviluppo web full-stack.
          </p>
          <span className="right1"></span>
          <span className="left1"></span>
        </Col>

        <Col className="d-flex flex-column my-4 position-relative">
          <figure>
            <img src={pcacademy} alt="logo pc academy" />
            <figcaption>
              <p>
                Master in Grafica Editoriale, Web Design & eCommerce <br /> 2020-2021
              </p>
            </figcaption>
          </figure>
          <p className="border_p">
            Corso multidisciplinare che mi ha permesso di coniugare le competenze di grafica e web design offrendomi una
            formazione completa che abbraccia entrambi questi campi creativi e complementari.
          </p>
          <span className="right2"></span>
          <span className="left2"></span>
        </Col>

        <Col className="d-flex flex-column my-4 position-relative">
          <figure>
            <img src={unina} alt="logo unina" />
            <figcaption>
              <p>
                Laurea triennale in Culture Digitali e della Comunicazione <br /> 2016-2020
              </p>
            </figcaption>
          </figure>
          <p className="border_p">
            Percorso di studi che ha rappresentato un solido punto di partenza per la mia carriera nel web design e in
            campi correlati. Durante il corso di laurea, ho acquisito competenze e conoscenze che sono rilevanti per il
            web design e la comunicazione digitale.
          </p>
          <span className="right3"></span>
          <span className="left3                                                                                                                                                          "></span>
        </Col>
      </Col>
    </Row>
  );
}

export default Training;
