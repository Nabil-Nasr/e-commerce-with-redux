import useGetItemsWithParams from "../../hooks/useGetItemsWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import CustomSelect from "../../components/utils/CustomSelect";
import useDebouncedState from "../../hooks/useDebouncedState";
import { createSubCategory } from "../../redux/actions/subCategoryActions";
import AdminAddRawData from "../../components/Admin/AdminAddRawData";


const AdminAddSubcategoryPage = () => {
  const [keyword, setKeyword] = useDebouncedState("", 500);
  useGetItemsWithParams({ params: { limit: 10, keyword }, getAllItemsAction: getAllCategories });

  return (
    <AdminAddRawData formAction={createSubCategory} pageHeader="إضافة تصنيف فرعي جديد">

      <CustomSelect placeholder="التصنيف الرئيسي" onInputChange={setKeyword} allItemsReducer="allCategories" name="category" />

      <input type="text" name="name" placeholder="إسم التصنيف الفرعي" className="p-2 form-control rounded-0" />

    </AdminAddRawData>
  );
};

export default AdminAddSubcategoryPage;
