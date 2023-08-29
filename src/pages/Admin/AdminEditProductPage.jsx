import { useState } from "react";
import AdminProductForm from "../../components/Admin/AdminProductForm";
import useGetWithParams from "../../hooks/useGetWithParams";
import { getProduct, updateProduct } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";

const AdminEditProductPage = () => {
  const { id } = useParams();
  const { itemData: product } = useGetWithParams({ params: { id }, getAction: getProduct, returnPayload: true });
  const [subCategorySelected, setSubCategorySelected] = useState(false);
  const [brandSelected, setBrandSelected] = useState(false);

  return (
    <AdminProductForm
      formAction={updateProduct}
      pageHeader={`تعديل المنتج (${product.title || "جاري الحصول علي بيانات المنتج ..."})`}
      {...{ product, subCategorySelected, setSubCategorySelected, brandSelected, setBrandSelected, }} />
  );
};

export default AdminEditProductPage;