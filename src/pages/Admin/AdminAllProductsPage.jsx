import AdminProductCardsContainer from "../../components/Admin/AdminProductCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";

const AdminAllProductsPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إدارة جميع المنتجات</h3>
      <AdminProductCardsContainer/>
      <Pagination pageCount={44}/>
    </div>
  );
}

export default AdminAllProductsPage;
