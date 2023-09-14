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
import npm from "../../assets/npm.svg";
import discord from "../../assets/discord.svg";
import postman from "../../assets/postman.svg";
import eclipse from "../../assets/eclipse.svg";
import vs from "../../assets/visualstudiocode.svg";
import wordprss from "../../assets/wordpress.svg";
import woocommerce from "../../assets/woocommerce.svg";
import { gsap } from "gsap";
import { useEffect } from "react";

import "./Skills.css";
function Skills({ animateSkills }) {
  useEffect(
    () => {
      if (animateSkills && window.innerWidth >= 768) {
        gsap.from(".skills", {
          duration: 4,

          x: +100,
          scrollTrigger: { trigger: ".App", scrub: 2, markers: false },
        });
      }
    },
    [animateSkills],
    window.innerWidth >= 768
  );

  return (
    <>
      <Row className=" row-customSmallRow x-5 skills">
        <h3 className="mt-5 position-relative">
          SKILLS<span class="bottom"></span>
        </h3>

        <Col xs={12} lg={6} className="frontendSkills ">
          <h5 className="fb"> FRONT END SKILLS</h5>
          <div className="d-flex flex-column mb-5 h-50 skillsContainer">
            <div className="d-flex  ">
              <img src={html} alt="logo HTML" className="programSkills" title="HTML" />
              <img src={css} alt="logo CSS" className=" programSkills" title="CSS3" />
              <img src={bootstrap} alt="logo bootstrap" className="programSkills" title="Bootstrap" />
              <img src={sass} alt="logo sass" className="programSkills" title="SASS" />
            </div>
            <div className="d-flex">
              <img src={javascript} alt="logo javascript" className="programSkills" title="Javascript" />
              <img src={typescript} alt="logo typescript" className="programSkills" title="Typescript" />
            </div>
            <div className="d-flex">
              <img src={react} alt="logo react" className="programSkills" title="React" />
              <img src={redux} alt="logo redux" className="programSkills" title="Redux" />
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6} className="d-flex flex-column align-items-lg-end ">
          <h5 className="fb"> BACK END SKILLS</h5>
          <div className="d-flex flex-column mb-5 h-50 skillsContainer">
            <div className="d-flex">
              <img src={java} alt="logo java" className="programSkills" title="Java" />
              <img src={spring} alt="logo spring" className="programSkills" title="Spring" />
              <img src={jwt} alt="logo jwt" className="programSkills" title="JWT" />
            </div>
            <div>
              <img src={postgresql} alt="logo postgresql" className="programSkills" title="PostgreSQL" />
            </div>
            <div className="d-flex">
              <img src={node} alt="logo node" className="programSkills" title="Node.JS" />
              <img src={npm} alt="logo npm" className="programSkills" title="npm" />
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <h5 className="fb">GRAPHIC DESIGN SKILLS </h5>
          <div className="d-flex flex-column mb-5 h-50 skillsContainer">
            <div className="d-flex">
              <img src={photoshop} alt="logo photoshop" className=" programSkills" title="Photoshop" />
              <img src={illustrator} alt="logo illustrator" className=" programSkills" title="Illustrator" />
              <img src={indesign} alt="logo indesign" className=" programSkills" title="InDesign" />
            </div>
            <div>
              <img src={ligthroom} alt="logo lightroom" className=" programSkills" title="Ligthroom" />
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column align-items-lg-end">
          <h5 className="fb">TOOL SKILLS</h5>
          <div className="d-flex flex-column h-50   mb-5 skillsContainer">
            <div className="d-flex">
              <img src={github} alt="logo github" className="programSkills" title="Github" />
              <img src={git} alt="logo git" className="programSkills" title="Git" />
              <img src={vs} alt="logo visual studio code" className="programSkills" title="Visual Studio Code" />
              <img src={eclipse} alt="logo eclipse" className="programSkills" title="Eclipse IDE" />
            </div>
            <div className="d-flex">
              <img src={postman} alt="logo postman" className="programSkills" title="Postman" />
              <img src={discord} alt="logo discord" className="programSkills" title="Discord" />
              <img src={wordprss} alt="logo wordpress" className="programSkills" title="WordPress" />
              <img src={woocommerce} alt="logo woocommerce" className="programSkills" title=" WooCommerce" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
