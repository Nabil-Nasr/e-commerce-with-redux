import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="10" md="8" lg="6" xl="5" className="d-flex flex-column my-4 mx-auto text-center">
            <h2 className="fw-bold my-3">تسجيل الدخول</h2>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="الإيميل..."
                className="text-center rounded-0 " />
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="كلمة السر..."
                className="text-center rounded-0 " />
            </Form.Group>
            <Button variant="dark" className="my-3 rounded-0 " type="submit">
              تسجيل الدخول
            </Button>
            <div>ليس لديك حساب ؟ <Link to="/register" className="text-danger text-decoration-none fw-bold ">اضغط هنا</Link></div>

          </Col>
        </Row>
        <div>روابط لتجربة تصميم الموقع</div>
        <div><Link to="/admin">صفحة الأدمن</Link></div>
        <div><Link to="/user">صفحة المستخدم العادي</Link></div>
      </Container>
    </>
  );
};

export default LoginPage;
