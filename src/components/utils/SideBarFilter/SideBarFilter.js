import { useState } from "react";
import { Button, Col, Form, Offcanvas, Row } from "react-bootstrap";
import "./SideBarFilter.css";

const SideBarFilter = ({ children, expandMinWidth }) => {
  const [show, setShow] = useState(false);

  // for saving state of Offcanvas onHide
  // but for saving state we shouldn't change viewport width
  const [offCanvasElements, setOffCanvasElements] = useState([]);

  const handleShow = () => {
    setShow(true);
    offCanvasElements.forEach(offCanvasElement => offCanvasElement.style.visibility = "visible");
  };

  const handleHide = () => {
    offCanvasElements.forEach(offCanvasElement => offCanvasElement.style.visibility = "hidden");
  };

  const handleEnter = offCanvasElement => setOffCanvasElements([offCanvasElement, offCanvasElement.previousElementSibling]);



  const responsive = expandMinWidth ?? "md";
  return (
    <>
      <Row>
        <Col>
          <Button onClick={handleShow} variant="dark" className={`d-${responsive}-none mb-3`} >البحث المتقدم
          </Button>
        </Col>
      </Row>
      <Row >
        <Col xs="4" md="3" xl="2" className={`d-none d-${responsive}-block`}>
          <Offcanvas onEntered={handleEnter} show={show} onHide={handleHide} onShow={null} responsive={responsive}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>البحث المتقدم</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <dv className="pb-4 d-grid row-gap-4">
                <div>
                  <h4 className="mb-3">الفئة</h4>
                  <Form.Check type="checkbox" id="all-categories" label="الكل"
                  />
                  <Form.Check type="checkbox" id="home-devices" label="أجهزة منزلية"
                  />
                  <Form.Check type="checkbox" id="electronics" label="إلكترونيات"
                  />
                  <Form.Check type="checkbox" id="cameras" label="كاميرات"
                  />
                </div>
                <div>
                  <h4 className="mb-3">الماركة</h4>
                  <Form.Check type="checkbox" id="all-brands" label="الكل"
                  />
                  <Form.Check type="checkbox" id="apple" label="أبل"
                  />
                  <Form.Check type="checkbox" id="samsung" label="سامسونج"
                  />
                  <Form.Check type="checkbox" id="huawei" label="هواوي"
                  />
                </div>
                <div>
                  <h4 className="mb-3">السعر</h4>
                  <div className="d-grid row-gap-2">
                    <div className="d-flex align-items-center column-gap-2">
                      <Form.Label htmlFor="from">من</Form.Label>
                      <Form.Control
                        type="number"
                        id="from"
                      />
                    </div>
                    <div className="d-flex align-items-center column-gap-2">
                      <Form.Label htmlFor="to">إلي</Form.Label>
                      <Form.Control
                        type="number"
                        id="to"
                      />
                    </div>
                  </div>
                </div>
              </dv>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col>
          {children}
        </Col>
      </Row>

    </>
  );
};

export default SideBarFilter;
