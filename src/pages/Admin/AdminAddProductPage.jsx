import { createProduct } from "../../redux/actions/productActions";
import AdminProductForm from "../../components/Admin/AdminProductForm";

const AdminAddProductPage = () => {
  return (
    <AdminProductForm
      formAction={createProduct}
      pageHeader="إضافة منتج جديد" />
  );
};



export default AdminAddProductPage;
