import { createBrand } from "../../redux/actions/brandActions";
import AdminFormData from "../../components/Admin/AdminFormData";

const AdminAddBrandPage = () => {
  return (
    <AdminFormData formAction={createBrand} itemReducer="brand" pageHeader="إضافة ماركة جديدة" imgHeader="صورة الماركة" imgName="image">
      <input type="text" name="name" minLength="3" placeholder="إسم الماركة" className="p-2 form-control rounded-0" />
    </AdminFormData>
  );
};

export default AdminAddBrandPage;
