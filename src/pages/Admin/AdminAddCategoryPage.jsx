import { createCategory } from "../../redux/actions/categoryActions";
import AdminFormData from "../../components/Admin/AdminFormData";

const AdminAddCategoryPage = () => {
  return (
    <AdminFormData formAction={createCategory} itemReducer="category" pageHeader="إضافة تصنيف جديد" imgHeader="صورة التصنيف" imgName="image">
      <input type="text" name="name" minLength="3" placeholder="إسم التصنيف" className="p-2 form-control rounded-0" />
    </AdminFormData>
  );
};

export default AdminAddCategoryPage;
