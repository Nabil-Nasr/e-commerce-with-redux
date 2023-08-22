import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import SubTitle from "../utils/SubTitle";
import Loading from "../utils/Loading";


const ProductCardsContainer = ({ btnTitle, btnPath, title, payload }) => {
  const { itemsData: products, loading, error } = payload;
  return (
    <div>
      <SubTitle btnTitle={btnTitle} btnPath={btnPath} title={title} />
      <Row className="row-gap-3 px-1">
        {
          !loading && products.length && !error ?
            products.map(product =>
              <ProductCard
                key={product._id}
                title={product.title}
                imgSrc={product.imageCover}
                ratingsAverage={product.ratingsAverage}
                ratingsQuantity={product.ratingsQuantity}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
              />)
            : <Loading />
        }
      </Row>
    </div>
  );
};

export default ProductCardsContainer;
