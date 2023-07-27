import { Col } from "react-bootstrap";
import imgg from '../../assets/images/img.webp'
const CategoryCard = ({backgroundColor,title,imgSrc}) => {
  return (
    <Col xs="4" md="3" lg="2" >
      <div className="rounded-circle ratio ratio-1x1 p-5 overflow-hidden position-relative " style={{backgroundColor:backgroundColor||"antiquewhite"}}>
        <img src={imgSrc??imgg} alt={title} className="h-75 w-auto  position-absolute top-50 start-50 translate-middle text-center" />
      </div>
      <p className="text-center mb-3 fs-5">{title}</p>
    </Col>
  );
}

export default CategoryCard;
