import { Col, Row } from "react-bootstrap";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.jpg";
import phone3 from "../../assets/images/phone3.webp";

const UserOrderItem = () => {
  return (
    <Row className="bg-white px-2 py-3 mx-0 row-gap-3">
      <Col sm="5" md="4" lg="3">
        <div className="d-flex align-items-center h-100">
          <img src={phone1} className="object-fit-contain w-100" style={{ maxHeight: "max(250px,30vh)" }} alt="" />
        </div>
      </Col>
      <Col sm="7" md="8" lg="9">
        <div>
          <div>سبس س سيسب سبيسب سبيس يسب سبيسب سيبيس سس بسي سب سب سبس</div>

          <div className="d-flex column-gap-2">
            <span>أحمر </span>
            <span className="text-warning"><i className="fas fa-star"></i> 4.5 </span>
            <span className="text-secondary">(180 تقييم)</span>
          </div>

          <div className="mt-3">الكمية <input type="number" style={{ maxWidth: 65 }} /></div>
        </div>
      </Col>
    </Row>
  );
};

export default UserOrderItem;
