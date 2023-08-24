import { useState } from "react";
import { Form } from "react-bootstrap";
import AdminAddFormData from "../../components/Admin/AdminAddFormData";
import ColorsInput from "../../components/utils/ColorsInput";
import CustomSelect from "../../components/utils/CustomSelect";
import ImagesInput from "../../components/utils/ImagesInput";
import useGetWithParams from "../../hooks/useGetWithParams";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { getAllBrands } from "../../redux/actions/brandActions";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { createProduct } from "../../redux/actions/productActions";
import { getAllSubCategories } from "../../redux/actions/subCategoryActions";
import { customSelectFields, customSelectLimit } from "../../utils/itemRequestQueries";

const AdminAddProductPage = () => {
  const [categoryKeyword, setCategoryKeyword] = useState("");
  const [subCategoryKeyword, setSubCategoryKeyword] = useState("");
  const [brandKeyword, setBrandKeyword] = useState("");

  const [categoryId, setCategoryId] = useState("");

  const limit = customSelectLimit;
  const fields = customSelectFields;
  useGetWithParams({ params: { limit, keyword: categoryKeyword, fields }, getAction: getAllCategories });

  // useUpdateEffect here is required because of the initial categoryId is empty string which is not valid
  useGetWithParams({ params: { limit, keyword: subCategoryKeyword, category: categoryId, fields }, getAction: getAllSubCategories, useEffectHook: useUpdateEffect });

  useGetWithParams({ params: { limit, keyword: brandKeyword, fields }, getAction: getAllBrands });


  return (
    <AdminAddFormData formAction={createProduct} itemReducer="product" pageHeader="إضافة منتج جديد" imgHeader="صورة المنتج الرئيسية" imgName="imageCover">

      <div className="text-secondary mt-3">صور المنتج الثانوية</div>
      <ImagesInput name="images" max={5} />

      <input type="text" name="title" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />
      <Form.Control as="textarea" name="description" className="rounded-0 mb-2" rows={3} placeholder="وصف المنتج" />

      <input type="number" placeholder="الكمية" name="quantity" className="p-2 text-start form-control rounded-0" min="1" />

      <input type="number" name="price" min="0" step="0.01" placeholder="السعر" className="p-2 text-start form-control rounded-0" />

      <input type="number" min="0" step="0.01" name="priceAfterDiscount" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />

      <CustomSelect
        placeholder="التصنيف الرئيسي"
        itemReducer="category"
        onInputChange={setCategoryKeyword}
        onSelect={({ value }) => setCategoryId(value)}
        name="category"
      />

      <CustomSelect
        isMulti
        placeholder={!categoryId ? "التصنيفات الفرعية (إختر تصنيف رئيسي أولا)" : "التصنيفات الفرعية"}
        itemReducer="subCategory"
        onInputChange={setSubCategoryKeyword}
        name="subcategory"
        // disabling cache to avoid showing the same options when main category changes
        disableCache
      />

      <CustomSelect
        placeholder="الماركة"
        itemReducer="brand"
        onInputChange={setBrandKeyword}
        name="brand"
      />

      <div className="my-3">
        <div>الألوان المتاحة</div>
        <ColorsInput name="availableColors" maxColors={5} />
      </div>
    </AdminAddFormData>
  );
};



export default AdminAddProductPage;
