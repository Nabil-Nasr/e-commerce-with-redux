import { Button, Form } from "react-bootstrap";

const UserAddressForm = ({ addressType, address, phone }) => {
  return (
    <div className="mt-3 d-grid row-gap-2">
      <input type="text" placeholder="نوع العنوان مثلا  (العنوان - العمل)" value={addressType} className="p-2 form-control rounded-0" />
      <Form.Control as="textarea" className="rounded-0 mb-2" value={address} rows={3} placeholder="العنوان بالتفصيل" />
      <input type="tel" placeholder="رقم الهاتف" value={phone} className="p-2 form-control rounded-0 text-start" />
      <Button variant="dark" className="py-2 rounded-0 ms-auto">{addressType ? "تعديل" : "إضافة"} العنوان</Button>
    </div>
  );
};

export default UserAddressForm;
