import { Row, Col } from "react-bootstrap";
import eleonora from "../../assets/eleonora.png";
import "./CustomHeader.css";

function CustomHeader() {
  return (
    <>
      <Row className="justify-center align-items-center">
        <Col xs={12}>
          <h1>WELCOME</h1>
        </Col>
      </Row>

      <Row className="row-customHeader">
        <Col xs={8}>
          <h2>JUNIOR FULL-STACK DEVELOPER</h2>
          <h2>GRAPHIC DESIGNER</h2>
        </Col>
        <Col xs={4}>
          <img src={eleonora} alt="immagine personale" width="100%" />
        </Col>
      </Row>
    </>
  );
}

export default CustomHeader;
