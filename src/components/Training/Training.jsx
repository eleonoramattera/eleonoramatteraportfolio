import { Row, Col } from "react-bootstrap";
import epicode from "../../assets/epicode.jpg";
import pcacademy from "../../assets/pcacademy.png";
import unina from "../../assets/unina.png";
function Training() {
  return (
    <Row className="row-mainRow">
      <h3>TRAINING</h3>
      <Col xs={12} className="d-flex">
        <img src={epicode} alt="logo epicode" />
        <div>
          <h4>EPICODE</h4>
          <h5>2022-2023</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam facere itaque quas velit impedit
            fugiat nulla cum ullam quod odio modi perferendis hic omnis consequuntur vel eveniet veniam, eius deserunt
            atque! Porro autem nihil minus ducimus animi nesciunt assumenda? Adipisci similique deleniti minima repellat
            quidem dolor consequatur aspernatur labore illum id eaque consectetur incidunt possimus vitae totam, odit
            ducimus facilis expedita quaerat, minus mollitia ullam dolorem iure. Eveniet distinctio quae cumque officia
            ipsa accusantium harum, maiores unde quos doloribus autem beatae laudantium suscipit voluptas sequi
            asperiores, eius cum iste repellendus, et esse quas. Incidunt natus suscipit molestiae. Officiis ab vel
            neque aspernatur expedita, veniam, minus id earum dignissimos qui architecto quisquam.
          </p>
        </div>
      </Col>
      <Col xs={12}>
        <img src={pcacademy} alt="logo epicode" />
      </Col>
      <Col xs={12}>
        <img src={unina} alt="logo epicode" />
      </Col>
    </Row>
  );
}

export default Training;
