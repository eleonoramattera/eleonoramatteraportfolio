import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import eleonora from "../../assets/eleonora.png";
import "./Jobs.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DownloadCv from "../DownloadCv/DownloadCv";

gsap.registerPlugin(ScrollTrigger);
function Jobs({ animateJobs }) {
  useEffect(() => {
    if (animateJobs) {
      // Esegui un'animazione quando animateNav è true
      gsap.from("h1, .jobs", { opacity: 1, x: -50, duration: 2 }, "<");
      gsap.from(".eleonoraImg", { opacity: 1, x: +50, delay: 0.2, duration: 2 }, "<");

      gsap.from(".presentation", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".jobs",
          start: "top bottom",
          end: "top top",
          scrub: true,
          toggleActions: "restart pause reverse pause",
        },
      });
    }
  }, [animateJobs]);

  return (
    <>
      <Row className="row-mainRow">
        <Col xs={8}>
          <h1>ELEONORA MATTERA</h1>
          <div className="w-50 text-start mx-auto jobs">
            <h4 className="mb-2">JUNIOR FULL-STACK DEVELOPER</h4>
            <h4>GRAPHIC DESIGNER</h4>
          </div>
        </Col>
        <Col xs={4}>
          <img src={eleonora} alt="immagine personale" width="100%" className="eleonoraImg" />
        </Col>
      </Row>
      <Row className=" mx-5 presentation text-start">
        <Col xs={6}>
          <p>
            Ciao, sono Eleonora Mattera, una giovane Junior Full Stack Developer e Graphic Designer. La mia passione
            combina l'arte della grafica con la logica della programmazione, consentendomi di creare esperienze
            coinvolgenti e sviluppare soluzioni innovative. Il mio background in grafica mi conferisce un occhio per i
            dettagli estetici, mentre la mia mente analitica affronta le sfide di programmazione con precisione. Le mie
            competenze spaziano dalla progettazione di interfacce accattivanti alla scrittura di codice efficiente.
            Cerco costantemente opportunità per crescere come professionista e mettere in pratica la mia creatività.
          </p>
          <DownloadCv />
        </Col>
      </Row>
    </>
  );
}
export default Jobs;
