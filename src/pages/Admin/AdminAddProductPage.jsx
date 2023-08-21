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
import { createProduct } from "../../redux/actions/productActions";

const AdminAddProductPage = () => {
  const [categoryKeyword, setCategoryKeyword] = useState("");
  const [subCategoryKeyword, setSubCategoryKeyword] = useState("");
  const [brandKeyword, setBrandKeyword] = useState("");

  const [categoryId, setCategoryId] = useState("");

  const fields = "name";
  useGetItemsWithParams({ params: { limit: 10, keyword: categoryKeyword, fields }, getAllItems: getAllCategories });

  // useUpdateEffect here is required because of the initial categoryId is empty string which is not valid
  useGetItemsWithParams({ params: { limit: 10, keyword: subCategoryKeyword, category: categoryId, fields }, getAllItems: getAllSubCategories, useEffectHook: useUpdateEffect });

  useGetItemsWithParams({ params: { limit: 10, keyword: brandKeyword, fields }, getAllItems: getAllBrands });

  const [images, setImages] = useState({});
  const appendFormData = async formData => {
    // create a blob from base64 image and append it to formData
    for (const imageKey in images) {
      const imageBlob = await fetch(images[imageKey]).then(res => res.blob());
      formData.append("images", imageBlob);
    }
  };

  return (
    <AdminAddFormData formAction={createProduct} itemReducer="product" pageHeader="إضافة منتج جديد" imgHeader="صورة المنتج الرئيسية" imgName="imageCover" appendFormData={appendFormData}>

      <div className="text-secondary mt-3">صور المنتج الثانوية</div>
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
