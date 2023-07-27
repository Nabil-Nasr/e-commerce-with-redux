import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgg from '../../assets/images/img.webp'

const BrandCard = ({imgSrc}) => {
  return (
    <Col xs="4"  md="3"  xl="2"  className="p-2">
      <Link to={`/brand`} className="text-decoration-none ">
        <div className="card border-0 rounded-0 ">
          <img src={imgSrc??imgg} alt="" className="w-100" />
        </div>
      </Link>
    </Col>
  );
}

export default BrandCard;
