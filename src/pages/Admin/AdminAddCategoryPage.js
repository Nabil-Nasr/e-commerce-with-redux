import { createCategory } from "../../redux/actions/categoryActions";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";

const AdminAddCategoryPage = () => {
  return (
    <AdminAddFormData formAction={createCategory} pageHeader="إضافة تصنيف جديد" imgHeader="صورة التصنيف">
      <input type="text" name="name" placeholder="إسم التصنيف" className="p-2 form-control rounded-0" />
    </AdminAddFormData>
  );
};

export default AdminAddCategoryPage;
