import AdminOrderCustomerDetails from "../../components/Admin/AdminOrderCustomerDetails";
import CartItemsContainer from "../../components/Cart/CartItemsContainer";

const AdminOrderDetailsPage = () => {
  return (
    <div>
      <h3 className="fw-bold">تفاصيل الطلب رقم #34342</h3>
      <CartItemsContainer/>
      <AdminOrderCustomerDetails/>
    </div>
  );
}

export default AdminOrderDetailsPage;
