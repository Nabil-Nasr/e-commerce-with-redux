import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";
import RatesContainer from "../../components/Rates/RatesContainer";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";

const ProductDetailsPage = () => {
  return (
      <Container className="my-4 ">
        <Row className="row-gap-4">
          <Col lg="6" xxl="5">
            <ProductGallery responsive="lg" />
          </Col>
          <Col lg="6" xxl="7">
            <ProductDetails/>
          </Col>
        </Row>
        <Row>
          <Col>
            <RatesContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductCardsContainer title="منتجات قد تعجبك"/>
          </Col>
        </Row>
      </Container>
  );
};

export default ProductDetailsPage;
