import { Button } from "react-bootstrap";

const CartCheckout = () => {
  return (
    <div className="position-sticky d-grid row-gap-3 bg-white p-3 shadow-sm" style={{top:75}}>
      <div className="d-flex">
        <input type="text" placeholder="كود الخصم" className="text-center p-2 form-control rounded-0  border-end-0" />
        <Button variant="dark" className="rounded-0 border-start-0 ">تطبيق</Button>
      </div>
      <Button className="bg-white text-black border py-2 rounded-0 ">34000 جنيه</Button>
      <Button variant="dark" className="py-2 rounded-0 ">إتمام الشراء</Button>
    </div>
  );
}

export default CartCheckout;
