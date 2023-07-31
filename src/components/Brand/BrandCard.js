import { Col } from "react-bootstrap";
import imgg from '../../assets/images/img.webp'

const BrandCard = ({imgSrc}) => {
  return (
    <Col xs="4"  md="3"  xl="2"  className="p-2">
        <div className="card border-0 rounded-0 ">
          <img src={imgSrc??imgg} alt="" className="w-100" />
        </div>
    </Col>
  );
}

export default BrandCard;
