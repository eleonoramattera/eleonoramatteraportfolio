import { Row, Col } from "react-bootstrap";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import eleonora from "../../assets/eleonora.png";
import margherita from "../../assets/margherita.svg";
import CustomNav from "../CustomNav/CustomNav";
import Jobs from "../Jobs/Jobs";
import Skills from "../Skills/Skills";
import Training from "../Training/Training";
import "./CustomHeader.css";

function CustomHeader() {
  const [showAlternateContent, setShowAlternateContent] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".margherita", { rotation: 360, duration: 2 });

    // Pausa di 1 secondo
    tl.to({}, { duration: 1 });

    // Animazione di h2 e img verso l'alto
    tl.to("h2, .margherita", {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power1.in",
      onComplete: () => {
        // Quando l'animazione è completata, mostra il contenuto alternativo
        setShowAlternateContent(true);

        tl.from("h1, h4", { opacity: 0, x: -50, duration: 2, stagger: 0.2 });
      },
    });
  }, []);

  return (
    <>
      {showAlternateContent ? (
        <>
          <CustomNav animateNav={showAlternateContent} />
          <Jobs animateJobs={showAlternateContent} />
          <Skills animateSkills={showAlternateContent} />
          <Training animateTraining={showAlternateContent} />
        </>
      ) : (
        <Row className="row-customRow">
          <Col xs={12} className="d-flex">
            <h2>WELCOME</h2>
            <img className="margherita" src={margherita} alt={margherita} width={"50em"} />
          </Col>
        </Row>
      )}
    </>
  );
}

export default CustomHeader;
