import { Form } from "react-bootstrap";
import CustomSelect from "../../components/utils/CustomSelect";
import useGetItemsWithParams from "../../hooks/useGetItemsWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllSubCategories } from "../../redux/actions/subCategoryActions";
import { getAllBrands } from "../../redux/actions/brandActions";
import useDebouncedState from "../../hooks/useDebouncedState";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";
// must be removed in any chance
import MultiImageInput from "react-multiple-image-input";
import { useState } from "react";

const AdminAddProductPage = () => {
  const [categoryKeyword, setCategoryKeyword] = useDebouncedState("", 500);
  const [subCategoryKeyword, setSubCategoryKeyword] = useDebouncedState("", 500);
  const [brandKeyword, setBrandKeyword] = useDebouncedState("", 500);
  useGetItemsWithParams({ params: { limit: 10, keyword: categoryKeyword }, getAllItemsAction: getAllCategories });
  useGetItemsWithParams({ params: { limit: 10, keyword: subCategoryKeyword }, getAllItemsAction: getAllSubCategories });
  useGetItemsWithParams({ params: { limit: 10, keyword: brandKeyword }, getAllItemsAction: getAllBrands });

  const [images,setImages] = useState({})

  return (
    <AdminAddFormData pageHeader="إضافة منتج جديد" imgHeader="صورة المنتج" imgName="imageCover">

      {/*must be removed in any chance */}
      <MultiImageInput
        images={images}
        setImages={setImages}
        theme={{
          background: 'var(--bs-body-bg)',
          outlineColor: 'var(--bs-border-color)',
          textColor: 'black',
          buttonColor: 'var(--bs-btn-active-bg)',
          modalColor: 'white',
        }}
        allowCrop={false}
      />

      <input type="text" name="title" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />
      <Form.Control as="textarea" name="description" className="rounded-0 mb-2" rows={3} placeholder="وصف المنتج" />

      <input type="number" placeholder="الكمية" name="quantity" className="p-2 text-start form-control rounded-0" min="1" />

      <input type="number" name="price" min="0" step="0.01" placeholder="السعر" className="p-2 text-start form-control rounded-0"/>

      <input type="number" min="0" step="0.01" name="priceAfterDiscount" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />

      <CustomSelect
        placeholder="التصنيف الرئيسي"
        allItemsReducer="allCategories"
        onInputChange={setCategoryKeyword}
        name="category"
      />

      <CustomSelect
        isMulti
        placeholder="التصنيفات الفرعية"
        allItemsReducer="allSubCategories"
        onInputChange={setSubCategoryKeyword}
        name="subcategories"
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
