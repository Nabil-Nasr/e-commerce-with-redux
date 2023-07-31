import UserOrderItem from "./UserOrderItem";

const UserOrderItemsContainer = () => {
  return (
    <div className="bg-white shadow-sm mb-3 p-2">
      <div className="h5">طلب رقم #34343</div>
      <UserOrderItem/>
      <UserOrderItem/>
      <UserOrderItem/>
      <div className="d-flex justify-content-between">
        <div>
          <span className="fw-bold me-2">الحالة </span>
          <span className="text-secondary">قيد التنفيذ</span>
        </div>
        <div className="fw-bold">4000 جنيه</div>
      </div>
    </div>
  );
};

export default UserOrderItemsContainer;
