import { Form } from "react-bootstrap";
import CustomSelect from "../../components/utils/CustomSelect";
import useGetItemsWithParams from "../../hooks/useGetItemsWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllSubCategories } from "../../redux/actions/subCategoryActions";
import { getAllBrands } from "../../redux/actions/brandActions";
import useDebouncedState from "../../hooks/useDebouncedState";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";

const AdminAddProductPage = () => {
  const [categoryKeyword, setCategoryKeyword] = useDebouncedState("", 500);
  const [subCategoryKeyword, setSubCategoryKeyword] = useDebouncedState("", 500);
  const [brandKeyword, setBrandKeyword] = useDebouncedState("", 500);
  useGetItemsWithParams({ params: { limit: 10, keyword: categoryKeyword }, getAllItemsAction: getAllCategories });
  useGetItemsWithParams({ params: { limit: 10, keyword: subCategoryKeyword }, getAllItemsAction: getAllSubCategories });
  useGetItemsWithParams({ params: { limit: 10, keyword: brandKeyword }, getAllItemsAction: getAllBrands });

  return (
    <AdminAddFormData pageHeader="إضافة منتج جديد" imgHeader="صورة المنتج" imgName="imageCover">
      <input type="text" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />
        <Form.Control as="textarea" className="rounded-0 mb-2" rows={3} placeholder="وصف المنتج" />

        <input type="number" placeholder="السعر قبل الخصم" className="p-2 text-start form-control rounded-0" />
        <input type="number" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />

        <CustomSelect
          placeholder="التصنيف الرئيسي"
          allItemsReducer="allCategories"
          onInputChange={setCategoryKeyword}
        />

        <CustomSelect
          isMulti
          placeholder="التصنيفات الفرعية"
          allItemsReducer="allSubCategories"
          onInputChange={setSubCategoryKeyword}
        />

        <CustomSelect
          placeholder="الماركة"
          allItemsReducer="allBrands"
          onInputChange={setBrandKeyword}
          name="brand"
        />

        <div className="my-3">
          <div>الألوان المتاحة</div>
          <div className="d-flex column-gap-2 mt-1">
            <div className="border p-3 rounded-circle  bg-danger"></div>
            <div className="border p-3 rounded-circle  bg-white"></div>
            <div className="border p-3 rounded-circle  bg-black"></div>
            <div className="border p-3 rounded-circle"><span className="position-absolute translate-middle">+</span></div>
          </div>
        </div>
    </AdminAddFormData>
  );
};

export default AdminAddProductPage;
