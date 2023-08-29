import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import SubTitle from "../utils/SubTitle";
import ResultsWrapper from "../utils/ResultsWrapper";


const ProductCardsContainer = ({ btnTitle, btnPath, title, payload }) => {
  const { itemsData: products, loading, error } = payload;
  return (
    <div>
      <SubTitle btnTitle={btnTitle} btnPath={btnPath} title={title} />
      <Row className="row-gap-3 px-1">
        <ResultsWrapper items={products} loading={loading} error={error}>
          {
            products.map(product =>
              <ProductCard
                key={product._id}
                id={product._id}
                title={product.title}
                imgSrc={product.imageCover}
                ratingsAverage={product.ratingsAverage}
                ratingsQuantity={product.ratingsQuantity}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
              />)
          }
        </ResultsWrapper>
      </Row>
    </div>
  );
};

export default ProductCardsContainer;
