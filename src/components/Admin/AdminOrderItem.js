import { Col, Row } from "react-bootstrap";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.jpg";
import phone3 from "../../assets/images/phone3.webp";
import { Link } from "react-router-dom";

const AdminOrderItem = ({ orderId,orderNumber }) => {
  return (
    <Row className="bg-white p-2 shadow-sm mb-3 mx-0 row-gap-3">
      <Col sm="5" md="4" lg="3">
        <Link to={orderId}>
          <div className="d-flex align-items-center h-100">
            <img src={phone3} className="object-fit-contain w-100" style={{ maxHeight: "max(250px,30vh)" }} alt="" />
          </div>
        </Link>
      </Col>
      <Col sm="7" md="8" lg="9">
        <div className="d-flex justify-content-between mb-2">
          <div className="text-secondary">طلب رقم #{orderNumber}</div>
          <div><i className="far fa-trash-can"></i> إزالة</div>
        </div>
        <div>سبس س سيسب سبيسب سبيس يسب سبيسب سيبيس سس بسي سب سب سبس</div>
        <div className="text-warning"><i className="fas fa-star"></i> 4.5</div>
        <div>
          <span className="text-secondary ">الماركة: </span>
          <span className="fs-4">سامسونج</span>
        </div>
        <div className="d-flex mb-3">
          <div className="border p-3 rounded-circle  bg-danger"></div>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div>الكمية <input type="number" style={{ maxWidth: 65 }} /></div>
          <div className="fs-5">3000 جنيه</div>
        </div>
      </Col>
    </Row>
  );
};

export default AdminOrderItem;
