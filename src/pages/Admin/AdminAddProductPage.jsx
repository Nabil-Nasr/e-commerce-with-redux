import { Form } from "react-bootstrap";
import CustomSelect from "../../components/utils/CustomSelect";
import useGetItemsWithParams from "../../hooks/useGetItemsWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllSubCategories } from "../../redux/actions/subCategoryActions";
import { getAllBrands } from "../../redux/actions/brandActions";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";
// must be removed in any chance
import MultiImageInput from "react-multiple-image-input";
import { useState } from "react";
import ColorsInput from "../../components/utils/ColorsInput";
import useUpdateEffect from "../../hooks/useUpdateEffect";

const AdminAddProductPage = () => {
  const [categoryKeyword, setCategoryKeyword] = useState("");
  const [subCategoryKeyword, setSubCategoryKeyword] = useState("");
  const [brandKeyword, setBrandKeyword] = useState("");

  const [categoryId, setCategoryId] = useState("");

  useGetItemsWithParams({ params: { limit: 10, keyword: categoryKeyword }, getAllItemsAction: getAllCategories });

  // useUpdateEffect here is required because of the initial categoryId is empty string which is not valid
  useGetItemsWithParams({ params: { limit: 10, keyword: subCategoryKeyword, category: categoryId }, getAllItemsAction: getAllSubCategories, useEffectHook: useUpdateEffect });

  useGetItemsWithParams({ params: { limit: 10, keyword: brandKeyword }, getAllItemsAction: getAllBrands });

  const [images, setImages] = useState({});

  return (
    <AdminAddFormData pageHeader="إضافة منتج جديد" imgHeader="صورة المنتج الرئيسية" imgName="imageCover">

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
        max={5}
      />

      <input type="text" name="title" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />
      <Form.Control as="textarea" name="description" className="rounded-0 mb-2" rows={3} placeholder="وصف المنتج" />

      <input type="number" placeholder="الكمية" name="quantity" className="p-2 text-start form-control rounded-0" min="1" />

      <input type="number" name="price" min="0" step="0.01" placeholder="السعر" className="p-2 text-start form-control rounded-0" />

      <input type="number" min="0" step="0.01" name="priceAfterDiscount" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />

      <CustomSelect
        placeholder="التصنيف الرئيسي"
        allItemsReducer="allCategories"
        onInputChange={setCategoryKeyword}
        onSelect={({ value }) => setCategoryId(value)}
        name="category"
      />

      <CustomSelect
        isMulti
        placeholder={!categoryId ? "التصنيفات الفرعية (إختر تصنيف رئيسي أولا)" : "التصنيفات الفرعية"}
        allItemsReducer="allSubCategories"
        onInputChange={setSubCategoryKeyword}
        name="subcategories"
        // disabling cache to avoid showing the same options when main category changes
        disableCache
      />

      <CustomSelect
        placeholder="الماركة"
        allItemsReducer="allBrands"
        onInputChange={setBrandKeyword}
        name="brand"
      />

      <div className="my-3">
        <div>الألوان المتاحة</div>
        <ColorsInput name="colors" maxColors={5} />
      </div>
    </AdminAddFormData>
  );
};



export default AdminAddProductPage;
