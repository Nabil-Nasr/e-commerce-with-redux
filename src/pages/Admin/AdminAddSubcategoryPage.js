import { Button,Form } from "react-bootstrap";

const AdminAddSubcategoryPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إضافة تصنيف فرعي جديد</h3>
      <div className="d-grid mt-3 row-gap-2">
        <Form.Select aria-label="Subcategory" className="rounded-0 ">
          <option>التصنيف الرئيسي</option>
          <option value="1">التصنيف الأول</option>
          <option value="2">التصنيف الثاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </Form.Select>
        <input type="text" placeholder="إسم التصنيف الفرعي" className="p-2 form-control rounded-0" />
        <Button variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
      </div>
    </div>
  );
}

export default AdminAddSubcategoryPage;
