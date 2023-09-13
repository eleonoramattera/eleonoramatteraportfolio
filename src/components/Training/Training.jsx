import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import epicode from "../../assets/epicode.jpg";
import pcacademy from "../../assets/pcacademy.png";
import unina from "../../assets/unina.png";
import { gsap } from "gsap";

import { useEffect } from "react";

import "./Training.css";

function Training({ animateTraining }) {
  useEffect(
    () => {
      if (animateTraining && window.innerWidth >= 768) {
        gsap.from(".training", {
          duration: 4,
          x: -100,
          scrollTrigger: { trigger: ".App", scrub: 2, markers: false },
        });
      }
    },
    [animateTraining],
    window.innerWidth >= 768
  );

  return (
    <Row className="row-mainSmallRow mt-5  training px-4 my-md-auto ">
      <h3 className="position-relative mt-5">
        TRAINING<span class="bottom"></span>
      </h3>
      <Col xs={12} className="d-flex flex-column my-4 ">
        <Carousel fade>
          <Carousel.Item>
            <figure className="d-none d-lg-block">
              <img src={epicode} alt="logo epicode" />
            </figure>
            <Carousel.Caption>
              <h5>
                Full-stack Developer <br /> 2022-2023
              </h5>
              <p>
                <span>Descrizione:</span> <br />
                Corso intensivo full-stack con un approccio che combina teoria e pratica, mi ha permesso di applicare le
                conoscenze apprese attraverso progetti reali, sia individualmente che in collaborazione con altri,
                consentendmi di acquisire esperienza diretta in ogni aspetto dello sviluppo web full-stack.
              </p>
              <p>
                <span> Skills:</span> <br />
                Bootstrap | Sass | Javascript | Typescript | React | Redux | Java | Spring | Jwt | JUnit | PostgreSQL
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <figure className="d-none d-lg-block">
              <img src={pcacademy} alt="logo pc academy" />
            </figure>
            <Carousel.Caption>
              <h5>
                Master in Grafica Editoriale, Web Design & eCommerce <br /> 2020-2021
              </h5>
              <p>
                <span>Descrizione:</span> <br />
                Corso multidisciplinare che mi ha permesso di coniugare le competenze di grafica e web design offrendomi
                una formazione completa che abbraccia entrambi questi campi creativi e li integra in maniera
                complementare.
              </p>
              <p>
                <span> Skills:</span> <br />
                HTML5 | CSS3 | WordPress | WooCommerce | Divi | Photoshop | InDesign | Illustrator | Ligthroom
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <figure className="d-none d-lg-block">
              <img src={unina} alt="logo unina" />
            </figure>
            <Carousel.Caption>
              <h5>
                Laurea triennale in Culture Digitali e della Comunicazione <br /> 2016-2020
              </h5>
              <p>
                Il mio percorso di laurea è stato un solido punto di partenza per le mie ambizioni professionali nel
                mondo digitale. . Durante gli studi, ho acquisito competenze cruciali nella comunicazione digitale, il
                marketing online, la gestione dei contenuti web e i principi di base dell'informatica e del web design.{" "}
                <br />
                Gli esami più significativi includono "Elementi di informatica e web", che ha coperto programmazione,
                linguaggi di markup e networking, e "Web design e nuovi media", che si è concentrato sulla progettazione
                di siti web e l'uso di nuovi media digitali.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}

export default Training;
