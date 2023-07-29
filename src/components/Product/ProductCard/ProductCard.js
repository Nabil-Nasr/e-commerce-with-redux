import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgg from '../../../assets/images/img.webp';
import './ProductCard.css';

const ProductCard = ({ title, vote, price, imgSrc }) => {
  return (
    <Col xs="4" md="3" xxl="2" className="px-2">
      <div className="card rounded-0 ">
        <Link to={`/products/:id`}>
          <img src={imgSrc ?? imgg} alt={title} className="w-100 " />
        </Link>
        <div className="p-2">
          <p className="product-title">{title}</p>
          <div className="d-flex justify-content-between align-items-end">
            <div className="text-warning"><i className="fas fa-star"></i> {vote}</div>
            <div>{price} جنيه</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
