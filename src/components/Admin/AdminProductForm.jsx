import { useState } from "react";
import { Form } from "react-bootstrap";
import AdminFormData from "../../components/Admin/AdminFormData";
import ColorsInput from "../../components/utils/ColorsInput";
import CustomSelect from "../../components/utils/CustomSelect";
import ImagesInput from "../../components/utils/ImagesInput";
import useGetWithParams from "../../hooks/useGetWithParams";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { getAllBrands } from "../../redux/actions/brandActions";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllSubCategories } from "../../redux/actions/subCategoryActions";
import { customSelectFields, customSelectLimit } from "../../utils/itemRequestQueries";

const AdminProductForm = ({ product = {}, formAction, pageHeader, subCategorySelected, setSubCategorySelected, brandSelected, setBrandSelected }) => {

  const [categoryKeyword, setCategoryKeyword] = useState("");
  const [subCategoryKeyword, setSubCategoryKeyword] = useState("");
  const [brandKeyword, setBrandKeyword] = useState("");

  const [categoryId, setCategoryId] = useState("");

  const limit = customSelectLimit;
  const fields = customSelectFields;
  useGetWithParams({ params: { limit, keyword: categoryKeyword, fields }, getAction: getAllCategories });

  // useUpdateEffect here is required because of the initial categoryId is empty string which is not valid
  useGetWithParams({ params: { limit, keyword: subCategoryKeyword, category: categoryId || product.category, fields }, getAction: getAllSubCategories, useEffectHook: useUpdateEffect });

  useGetWithParams({ params: { limit, keyword: brandKeyword, fields }, getAction: getAllBrands });


  return (
    <AdminFormData formAction={formAction} itemReducer="product" pageHeader={pageHeader} imgHeader="صورة المنتج الرئيسية" imgName="imageCover" imgUrl={product.imageCover}>

      <div className="text-secondary mt-3">صور المنتج الثانوية</div>
      <ImagesInput files={product.images} name="images" max={5} />

      <input type="text" defaultValue={product.title} name="title" placeholder="إسم المنتج" className="p-2 form-control rounded-0" />

      <Form.Control as="textarea" defaultValue={product.description} name="description" className="rounded-0 mb-2" rows={5} placeholder="وصف المنتج" />

      <input type="number" defaultValue={product.quantity} placeholder="الكمية" name="quantity" className="p-2 text-start form-control rounded-0" min="1" />

      <input type="number" defaultValue={product.price} name="price" min="0" step="0.01" placeholder="السعر" className="p-2 text-start form-control rounded-0" />

      <input type="number" defaultValue={product.priceAfterDiscount} min="0" step="0.01" name="priceAfterDiscount" placeholder="السعر بعد الخصم" className="p-2 text-start form-control rounded-0" />

      <CustomSelect
        placeholder="التصنيف الرئيسي"
        itemReducer="category"
        onInputChange={setCategoryKeyword}
        onSelect={selected => setCategoryId(selected?.value)}
        name="category"
        value={!categoryId && product.category && [{ value: product.category, label: "تصنيف رئيسي مسجل" }]}
      />

      <CustomSelect
        // helping in reloading component when main category changes
        key={categoryId}
        isMulti
        placeholder={!categoryId && !product.category ? "التصنيفات الفرعية (إختر تصنيف رئيسي أولا)" : "التصنيفات الفرعية"}
        itemReducer="subCategory"
        onInputChange={setSubCategoryKeyword}
        name="subcategory"
        // disabling cache to avoid showing the same options when main category changes
        onSelect={setSubCategorySelected && (() => setSubCategorySelected(true))}
        // first condition to apply clearing value at the first set for categoryId
        value={!categoryId && !subCategorySelected && product.subcategory?.length && product.subcategory?.map((subcategory, index) => ({ value: subcategory, label: `تصنيف فرعي مسجل ${index + 1}` }))}
        disableCache
      />

      <CustomSelect
        placeholder="الماركة"
        itemReducer="brand"
        onInputChange={setBrandKeyword}
        onSelect={setBrandSelected && (() => setBrandSelected(true))}
        name="brand"
        value={!brandSelected && product.brand && [{ value: product.brand, label: "ماركة مسجلة" }]}
      />

      <div className="my-3">
        <div>الألوان المتاحة</div>
        <ColorsInput name="availableColors" maxColors={5} defaultValue={product.availableColors} />
      </div>
    </AdminFormData>
  );
};

export default AdminProductForm;