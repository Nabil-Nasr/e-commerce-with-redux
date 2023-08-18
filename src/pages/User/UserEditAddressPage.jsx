import UserAddressForm from "../../components/User/UserAddressForm";

const UserEditAddressPage = () => {
  return (
    <div>
      <h3 className="fw-bold">تعديل العنوان</h3>
      <UserAddressForm addressType="المنزل" address="الأقصر - الكرنك الجديدة - نجع الطويل" phone="01023650518"/>
    </div>
  );
}

export default UserEditAddressPage;
