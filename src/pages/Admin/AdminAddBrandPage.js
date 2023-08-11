import { createBrand } from "../../redux/actions/brandActions";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";

const AdminAddBrandPage = () => {
  return (
    <AdminAddFormData formAction={createBrand} pageHeader="إضافة ماركة جديدة" imgHeader="صورة الماركة" >
      <input type="text" name="name" placeholder="إسم الماركة" className="p-2 form-control rounded-0" />
    </AdminAddFormData>
  );
};

export default AdminAddBrandPage;
