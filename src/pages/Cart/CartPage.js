import { Col, Container, Row } from "react-bootstrap";
import CartItemsContainer from "../../components/Cart/CartItemsContainer";
import CartCheckout from "../../components/Cart/CartCheckout";

const CartPage = () => {
  return (
    <Container className="my-4">
      <h3 className="fw-bold">عربة التسوق</h3>
      <Row>
        <Col xs="12" md="8"><CartItemsContainer/></Col>
        <Col md="4"><CartCheckout/></Col>
      </Row>
    </Container>
  );
}

export default CartPage;
