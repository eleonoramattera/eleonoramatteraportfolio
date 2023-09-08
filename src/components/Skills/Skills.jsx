import { Row, Col } from "react-bootstrap";
import photoshop from "../../assets/photoshop.svg";
import illustrator from "../../assets/illustrator.svg";
import indesign from "../../assets/indesign.svg";
import ligthroom from "../../assets/lightroom.svg";
import html from "../../assets/html5.svg";
import css from "../../assets/css3.svg";
import bootstrap from "../../assets/bootstrap.svg";
import sass from "../../assets/sass.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import node from "../../assets/nodejs.svg";
import java from "../../assets/java.svg";
import spring from "../../assets/spring.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import postgresql from "../../assets/postgreesql.svg";
import jwt from "../../assets/jwt.svg";
import discord from "../../assets/discord.svg";
import postman from "../../assets/postman.svg";
import eclipse from "../../assets/eclipse.svg";
import vs from "../../assets/visualstudiocode.svg";
import { gsap } from "gsap";
import { useEffect } from "react";

import "./Skills.css";
function Skills({ animateSkills }) {
  useEffect(() => {
    if (animateSkills) {
      // Esegui un'animazione quando animateNav è true
      //   gsap.from(", .jobs, .eleonoraImg", { y: -50, duration: 2 }, "<");
      //   gsap.to(".frontendSkills", {
      //     x: +80,
      //     duration: 2,
      //     scrollTrigger: {
      //       trigger: "body",
      //       scrub: 2,
      //       markers: false,
      //     },
      //   });

      gsap.from(".skills", {
        duration: 4,

        x: +100,
        scrollTrigger: { trigger: ".App", scrub: 2, markers: false },
      });
    }
  }, [animateSkills]);

  return (
    <>
      <Row className=" row-customRow x-5 skills">
        <h3 className="mt-5"> SKILLS</h3>

        <Col xs={6} className="frontendSkills">
          <h5 className="fb"> FRONT END SKILLS</h5>
          <div className="d-flex flex-column  mt-5 h-50 skillsContainer">
            <div className="d-flex">
              <img src={html} alt="logo HTML" className="programSkills" />
              <img src={css} alt="logo CSS" className=" programSkills" />
              <img src={bootstrap} alt="logo bootstrap" className="programSkills" />
              <img src={sass} alt="logo sass" className="programSkills" />
            </div>
            <div className="d-flex">
              <img src={javascript} alt="logo javascript" className="programSkills" />
              <img src={typescript} alt="logo typescript" className="programSkills" />
            </div>
            <div className="d-flex">
              <img src={react} alt="logo react" className="programSkills" />
              <img src={redux} alt="logo redux" className="programSkills" />
            </div>
          </div>
        </Col>

        <Col xs={6} className="d-flex flex-column align-items-end backendSkills">
          <h5 className="fb"> BACK END SKILLS</h5>
          <div className="d-flex flex-column  mt-5 h-50 skillsContainer">
            <div className="d-flex">
              <img src={java} alt="logo java" className="programSkills" />
              <img src={spring} alt="logo spring" className="programSkills" />
              <img src={jwt} alt="logo jwt" className="programSkills" />
            </div>
            <div>
              <img src={postgresql} alt="logo postgresql" className="programSkills" />
            </div>
            <div className="d-flex">
              <img src={node} alt="logo node" className="programSkills" />
            </div>
          </div>
        </Col>

        <Col xs={6} className="graphicSkills">
          <h5 className="fb">GRAPHIC DESIGN SKILLS </h5>
          <div className="d-flex flex-column  mt-5 h-50 skillsContainer">
            <div className="d-flex">
              <img src={photoshop} alt="logo photoshop" className=" programSkills" />
              <img src={illustrator} alt="logo illustrator" className=" programSkills" />
              <img src={indesign} alt="logo indesign" className=" programSkills" />
            </div>
            <div>
              <img src={ligthroom} alt="logo lightroom" className=" programSkills" />
            </div>
          </div>
        </Col>
        <Col xs={6} className="d-flex flex-column align-items-end">
          <h5 className="fb">TOOL SKILLS</h5>
          <div className="d-flex flex-column  mt-5 h-50  skillsContainer">
            <div className="d-flex">
              <img src={github} alt="logo github" className="programSkills" />
              <img src={git} alt="logo git" className="programSkills" />
              <img src={discord} alt="logo discord" className="programSkills" />
            </div>
            <div className="d-flex">
              <img src={vs} alt="logo visual studio code" className="programSkills" />
              <img src={eclipse} alt="logo eclipse" className="programSkills" />
              <img src={postman} alt="logo postman" className="programSkills" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
