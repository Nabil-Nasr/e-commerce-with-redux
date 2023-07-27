import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="10" md="8" lg="6" xl="5" className="d-flex flex-column my-4 mx-auto text-center">
            <h2 className="fw-bold my-3">تسجيل حساب جديد</h2>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="إسم المستخدم..."
                className="text-center" />
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="الإيميل..."
                className="text-center" />
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="كلمة السر..."
                className="text-center" />
            </Form.Group>
            <Button variant="dark" className="my-3" type="submit">
              تسجيل الحساب
            </Button>
            <div>لديك حساب بالفعل ؟ <Link to="/login" className="text-danger text-decoration-none fw-bold ">اضغط هنا</Link></div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegisterPage;
