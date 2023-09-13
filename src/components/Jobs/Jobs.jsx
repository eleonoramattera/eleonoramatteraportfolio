import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import eleonora from "../../assets/eleonora.png";
import "./Jobs.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownloadCv from "../DownloadCv/DownloadCv";

gsap.registerPlugin(ScrollTrigger);

function Jobs({ animateJobs }) {
  useEffect(
    () => {
      if (animateJobs && window.innerWidth >= 992) {
        // Esegui un'animazione quando animateNav è true
        gsap.from("h1, .jobs, .eleonoraImg", { y: -50, duration: 2 }, "<");
        //   gsap.from(".eleonoraImg", { x: +50, delay: 0.2, duration: 2 }, "<");

        gsap.to(".presentation", {
          x: +100,
          duration: 2,
          scrollTrigger: {
            trigger: ".App",
            scrub: 2,
            markers: false,
          },
        });
      }
    },
    [animateJobs],
    window.innerWidth >= 992
  );

  return (
    <>
      <Row className="row-mainRow">
        <Col xs={12} md={8}>
          <h1>ELEONORA MATTERA</h1>
          <div className="w-50 text-start mx-auto jobs">
            <h4 className="mb-2">JUNIOR FULL-STACK DEVELOPER</h4>
            <h4>GRAPHIC DESIGNER</h4>
          </div>
        </Col>
        <Col md={4} className="d-none d-sm-block ">
          <img src={eleonora} alt="immagine personale" width="100%" className="eleonoraImg" />
        </Col>
      </Row>
      <Row className=" mx-2 mx-md-5 mb-5 presentation text-start">
        <Col xs={12} md={6} lg={6} className="presentation  ">
          <p>
            Ciao, sono Eleonora Mattera, una giovane Junior Full Stack Developer e Graphic Designer. La mia passione
            combina l'arte della grafica con la logica della programmazione, consentendomi di creare esperienze
            coinvolgenti e sviluppare soluzioni innovative. Il mio background in grafica mi conferisce un occhio per i
            dettagli estetici, mentre la mia mente analitica affronta le sfide di programmazione con precisione. Le mie
            competenze spaziano dalla progettazione di interfacce accattivanti alla scrittura di codice efficiente.
            Cerco costantemente opportunità per crescere come professionista e mettere in pratica la mia creatività.
          </p>
          <DownloadCv className="mb-5" />
        </Col>
      </Row>
    </>
  );
}
export default Jobs;
