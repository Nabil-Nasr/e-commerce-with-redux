import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white py-4">
      <Container className="d-flex justify-content-between  flex-wrap text-dark-emphasis row-gap-3">
        <div className="d-flex column-gap-2 align-items-center">
          <span>الشروط والأحكام</span>
          <span>سياسة الخصوصية</span>
          <span>اتصل بنا</span>
        </div>
        <div className="d-flex column-gap-2 align-items-center column-gap-3 ">
          <div><i className="fas fa-phone"></i> 01023650518 </div>
          <div className="d-flex column-gap-1">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
