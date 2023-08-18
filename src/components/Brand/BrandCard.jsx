import { Col } from "react-bootstrap";

const BrandCard = ({imgSrc,title}) => {
  return (
    <Col xs="4"  md="3"  xl="2"  className="p-2">
        <div className="card border-0 rounded-0 ">
          <img src={imgSrc} alt={title} className="w-100 h-100 object-fit-contain" />
        </div>
    </Col>
  );
}

export default BrandCard;
