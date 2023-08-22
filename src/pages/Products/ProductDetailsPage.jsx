import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";
import RatesContainer from "../../components/Rates/RatesContainer";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import useGetWithParams from "../../hooks/useGetWithParams";
import { getAllProducts, getProduct } from "../../redux/actions/productActions";
import { productCardFields, productCardsLimit } from "../../utils/itemRequestQueries";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { id } = useParams();
  useGetWithParams({ params: { id }, getAction: getProduct });

  useGetWithParams({ getAction: getAllProducts, params: { limit: productCardsLimit, fields: productCardFields, sort: "-ratingsAverage,-ratingsQuantity" } });

  const payload = useSelector(({ product }) => product);
  const { itemData: { imageCover, images } } = payload;
  return (
    <Container className="my-4 ">
      <Row className="row-gap-4">
        <Col lg="6" xxl="5">
          <ProductGallery items={[imageCover].concat(images)} responsive="lg" />
        </Col>
        <Col lg="6" xxl="7">
          <ProductDetails />
        </Col>
      </Row>
      <Row>
        <Col>
          <RatesContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductCardsContainer title="منتجات قد تعجبك" payload={payload} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
