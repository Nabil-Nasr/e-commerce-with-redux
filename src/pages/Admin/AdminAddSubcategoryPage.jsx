import useGetWithParams from "../../hooks/useGetWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import CustomSelect from "../../components/utils/CustomSelect";
import { createSubCategory } from "../../redux/actions/subCategoryActions";
import AdminAddRawData from "../../components/Admin/AdminAddRawData";
import { customInputFields, customSelectLimit } from "../../utils/itemRequestQueries";
import { useState } from "react";


const AdminAddSubcategoryPage = () => {
  const [keyword, setKeyword] = useState("");
  useGetWithParams({ params: { limit: customSelectLimit, keyword, fields: customInputFields }, getAction: getAllCategories });

  return (
    <AdminAddRawData formAction={createSubCategory} pageHeader="إضافة تصنيف فرعي جديد">

      <CustomSelect placeholder="التصنيف الرئيسي" onInputChange={setKeyword} itemReducer="category" name="category" />

      <input type="text" name="name" placeholder="إسم التصنيف الفرعي" className="p-2 form-control rounded-0" />

    </AdminAddRawData>
  );
};

export default AdminAddSubcategoryPage;
