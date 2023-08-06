import { Col } from "react-bootstrap";

const CategoryCard = ({backgroundColor,title,imgSrc}) => {
  return (
    <Col xs="4" md="3" lg="2" >
      <div className="rounded-circle ratio ratio-1x1 p-5  position-relative " style={{backgroundColor}}>
        <img src={imgSrc} alt={title} className="w-100 h-100  object-fit-contain  position-absolute top-50 start-50 translate-middle text-center" />
      </div>
      <p className="text-center mb-3 fs-5">{title}</p>
    </Col>
  );
}

export default CategoryCard;
