import { Button } from "react-bootstrap";

const AdminAddBrandPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إضافة ماركة جديدة</h3>
      <div className="text-secondary">
        <div>صورة الماركة</div>
        <i className="far fa-image fa-7x"></i>
      </div>
      <div className="d-grid mt-3 row-gap-2">
        <input type="text" placeholder="إسم الماركة" className="p-2 form-control rounded-0" />
        <Button variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
      </div>
    </div>
  );
};

export default AdminAddBrandPage;
