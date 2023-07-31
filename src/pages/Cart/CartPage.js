import { Col, Container, Row } from "react-bootstrap";
import CartCheckout from "../../components/Cart/CartCheckout";
import CartItemsContainer from "../../components/Cart/CartItemsContainer";

const CartPage = () => {
  return (
    <Container className="my-4">
      <h3 className="fw-bold">عربة التسوق</h3>
      <Row>
        <Col md="8"><CartItemsContainer /></Col>
        <Col md="4"><CartCheckout /></Col>
      </Row>
    </Container>
  );
};

export default CartPage;
