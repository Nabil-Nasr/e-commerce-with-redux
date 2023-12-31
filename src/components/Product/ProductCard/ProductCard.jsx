import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ id, title, ratingsAverage, ratingsQuantity, price, priceAfterDiscount, imgSrc, subElement }) => {
  return (
    <Col xs="4" md="3" xxl="2" className="px-2">
      <div className="card rounded-0 shadow-sm h-100">
        {/* subElement for usage with admin CRUD operations */}
        {subElement}
        <Link to={`/products/${id}`} className="h-100">
          <img src={imgSrc} alt={title} className="w-100 object-fit-contain" />
        </Link>
        <div className="p-2 d-grid">
          <div>
            <i className="far fa-heart text-end w-100"></i>
            <p className="product-title" dir="auto" title={title}>{title}</p>
          </div>
          <div className="d-flex justify-content-between align-items-end">

            <div className="d-flex gap-1 flex-wrap align-items-center  justify-content-center  text-center">
              <div className="text-warning">
                <i className="fas fa-star"></i>
                {/* rounding to first fraction digit if exists */}
                {Math.round((ratingsAverage || 0) * 10) / 10}
              </div>
              <div>({ratingsQuantity})</div>
            </div>

            <div className="text-center">
              {
                priceAfterDiscount ? (
                  <>
                    <div className="text-decoration-line-through text-secondary">{price} جنيه</div>
                    <div>{priceAfterDiscount} جنيه</div>
                  </>
                )
                  : <div>{price} جنيه</div>
              }
            </div>

          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
