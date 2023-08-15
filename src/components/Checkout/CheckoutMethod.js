import { Button, Form } from "react-bootstrap";

const CheckoutMethod = () => {
  return (
    <div className="d-grid row-gap-2">
      <h3 className="fw-bold">اختر طريقة الدفع</h3>
      <div className="bg-white px-3 py-4 d-grid row-gap-3">
        <Form.Check type="radio" name="paymentMethod" id="card" label="الدفع بالبطاقة الائتمانية" />
        <Form.Check type="radio" name="paymentMethod" id="bank-card" label="الدفع عند الإستلام" />
      </div>
      <div className="ms-auto mt-2 d-flex column-gap-2 ">
        <Button className="bg-white text-black border py-2 rounded-0 ">34000 جنيه</Button>
        <Button variant="dark" className="py-2 rounded-0">إتمام الشراء</Button>
      </div>
    </div>
  );
}

export default CheckoutMethod;
