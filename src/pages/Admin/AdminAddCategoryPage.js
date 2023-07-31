import { Button } from "react-bootstrap";

const AdminAddCategoryPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إضافة تصنيف جديد</h3>
      <div className="text-secondary">
        <div>صورة التصنيف</div>
        <i className="far fa-image fa-7x"></i>
      </div>
      <div className="d-grid mt-3 row-gap-2">
        <input type="text" placeholder="إسم التصنيف" className="p-2 form-control rounded-0" />
        <Button variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
      </div>
    </div>
  );
}

export default AdminAddCategoryPage;
