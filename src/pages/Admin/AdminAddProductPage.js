import { Button, Form } from "react-bootstrap";
import MultiSelect from "../../components/utils/MultiSelect";

const AdminAddProductPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إضافة منتج جديد</h3>
      <div className="text-secondary">
        <div>صورة المنتج</div>
        <i className="far fa-image fa-7x"></i>
      </div>

      <div className="mt-3 d-grid row-gap-2">
        <input type="text" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />
        <Form.Control as="textarea" className="rounded-0 mb-2" rows={3} placeholder="وصف المنتج" />

        <input type="number" placeholder="السعر قبل الخصم" className="p-2 text-start form-control rounded-0" />
        <input type="number" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />
        
        <Form.Select aria-label="Subcategory" className="rounded-0 text-secondary">
          <option>التصنيف الرئيسي</option>
          <option value="1">التصنيف الأول</option>
          <option value="2">التصنيف الثاني</option>
          <option value="3">التصنيف الثالث</option>
          <option value="4">التصنيف الرابع</option>
        </Form.Select>

        <MultiSelect
          placeholder="التصنيفات الفرعية"
          options={[
            {value:1,label:"التصنيف الفرعي الأول"},
            {value:2,label:"التصنيف الفرعي الثاني"},
            {value:3,label:"التصنيف الفرعي الثالث"},
            {value:4,label:"التصنيف الفرعي الرابع"},
          ]}
          noOptionsMessage="لا خيارات"
        />

        <Form.Select aria-label="Subcategory" className="rounded-0 text-secondary">
          <option>الماركة</option>
          <option value="1">الماركة الأولي</option>
          <option value="2">الماركة الثانية</option>
          <option value="3">الماركة الثالثة</option>
          <option value="4">الماركة الرابعة</option>
        </Form.Select>

        <div className="my-3">
          <div>الألوان المتاحة</div>
          <div className="d-flex column-gap-2 mt-1">
            <div className="border p-3 rounded-circle  bg-danger"></div>
            <div className="border p-3 rounded-circle  bg-white"></div>
            <div className="border p-3 rounded-circle  bg-black"></div>
            <div className="border p-3 rounded-circle"><span className="position-absolute translate-middle">+</span></div>
          </div>
        </div>

        <Button variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>

      </div>

    </div>
  );
};

export default AdminAddProductPage;
