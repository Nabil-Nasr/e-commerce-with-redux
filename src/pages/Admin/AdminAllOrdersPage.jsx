import AdminOrderItemsContainer from "../../components/Admin/AdminOrderItemsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";

const AdminAllOrdersPage = () => {
  return (
    <div>
      <h3 className="fw-bold">إدارة جميع الطلبات</h3>
      <AdminOrderItemsContainer/>
      {/* <Pagination pageCount={30} /> */}
    </div>
  );
};

export default AdminAllOrdersPage;
