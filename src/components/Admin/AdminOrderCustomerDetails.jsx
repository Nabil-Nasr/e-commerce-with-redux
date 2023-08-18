import { Button, Form } from "react-bootstrap";

const AdminOrderCustomerDetails = () => {
  return (
    <div className="mt-5 bg-white  py-2 shadow-sm">
      <div className="fw-bold h5 mb-2 px-3">تفاصيل العميل</div>

      <div className="p-3">
        <div>الإسم : <span className="text-secondary">نبيل نصرالدين محمد</span></div>
        <div>رقم الهاتف : <span className="text-secondary">01023650518</span></div>
        <div>الإيميل : <span className="text-secondary">nabilnasreldeencs@gmail.com</span></div>
      </div>

      <div className="text-center border-top border-bottom py-2">المجموع 4000 جنيه</div>

      <div className="d-flex py-3 column-gap-2 justify-content-center px-5 mx-3">
        <Form.Select aria-label="Order Case" className="text-center rounded-0 ">
          <option>حالة الطلب</option>
          <option value="1">قيد التنفيذ</option>
          <option value="2">تم الإنتهاء</option>
          <option value="3">إلغاء</option>
        </Form.Select>
        <Button variant="dark" className="rounded-0 py-2">حفظ</Button>
      </div>

    </div>
  );
};

export default AdminOrderCustomerDetails;
