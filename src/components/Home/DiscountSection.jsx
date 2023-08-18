import { Col, Row } from "react-bootstrap";
import img from '../../assets/images/logo.png'

const DiscountSection = () => {
  return (
    <>
      <Row className="bg-success  align-items-center">
        <Col xs="6">
          <p className="fs-4 text-white text-center m-0 ">خصم يصل إلي 30% علي السخينه</p>
        </Col>
        <Col xs="6">
          <img src={img} alt="" className="d-block mx-auto mw-100 "/>
        </Col>
      </Row>
    </>
  );
}

export default DiscountSection;
