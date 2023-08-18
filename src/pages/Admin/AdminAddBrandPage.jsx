import { createBrand } from "../../redux/actions/brandActions";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";

const AdminAddBrandPage = () => {
  return (
    <AdminAddFormData formAction={createBrand} itemReducer="brand" pageHeader="إضافة ماركة جديدة" imgHeader="صورة الماركة" imgName="image">
      <input type="text" name="name" minLength="3" placeholder="إسم الماركة" className="p-2 form-control rounded-0"/>
    </AdminAddFormData>
  );
};

export default AdminAddBrandPage;
