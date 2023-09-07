import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillBehanceCircle } from "react-icons/ai";
import logo from "../../assets/margherita.svg";
import "./CustomNav.css";

function CustomNav({ animateNav }) {
  useEffect(() => {
    if (animateNav) {
      gsap.from(".customNav", { opacity: 0, y: -50, duration: 2 });
      gsap.to(".logo", {
        rotation: 900,
        duration: 1,
        scrollTrigger: {
          trigger: ".App",
          scrub: 5,
          markers: true,
        },
      });
    }
  }, [animateNav]);

  return (
    <Navbar className="bg-body-tertiary customNav fixed-top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width={"40em"} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="https://github.com/eleonoramattera">
            <AiFillGithub className="socialIcons " />
          </Link>
          <Link to="https://www.linkedin.com/in/eleonora-mattera-655078218/">
            <FaLinkedinIn className="socialIcons " />
          </Link>
          <Link to="https://www.behance.net/eleonoramattera">
            <AiFillBehanceCircle className="socialIcons " />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;
