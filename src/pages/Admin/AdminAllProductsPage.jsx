import { useReducer } from "react";
import AdminProductCardsContainer from "../../components/Admin/AdminProductCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import useGetAllItems from "../../hooks/useGetAllItems";
import { getAllProducts, productEnableLoading } from "../../redux/actions/productActions";
import { productCardFields } from "../../utils/itemRequestQueries";

const AdminAllProductsPage = () => {
  const [remount, remountComponent] = useReducer(prevState => !prevState, false);
  const { applyPagination } = useGetAllItems({ getAllItems: getAllProducts, itemEnableLoading: productEnableLoading, params: { fields: productCardFields,limit:2 },remount });
  return (
    <div>
      <h3 className="fw-bold">إدارة جميع المنتجات</h3>
      <AdminProductCardsContainer  remountComponent={remountComponent}/>
      <Pagination itemReducer="product" applyPagination={applyPagination} />
    </div>
  );
};

export default AdminAllProductsPage;
