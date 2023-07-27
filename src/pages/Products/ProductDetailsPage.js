import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6" xxl="5">
            <ProductGallery />
          </Col>
          <Col lg="6" xxl="7">
            <ProductDetails/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetailsPage;
