import { Link } from "react-router-dom";

const UserAddress = () => {
  return (
    <div className="bg-white shadow-sm p-2 pb-3 mb-3 d-grid row-gap-3">

    <div className="d-flex justify-content-between">
      <div>المنزل</div>
      <div className="d-flex column-gap-3">
        <Link to="edit-address" className="text-reset text-decoration-none"><span><i className="fas fa-pen"></i> تعديل</span></Link>
        <span><i className="far fa-trash-can"></i> إزالة</span>
      </div>
    </div>

    <div className="text-secondary">الأقصر - الكرنك الجديدة - نجع الطويل</div>

    <div>رقم الهاتف : <span className="text-secondary">01023650518</span></div>

  </div>
  );
}

export default UserAddress;
