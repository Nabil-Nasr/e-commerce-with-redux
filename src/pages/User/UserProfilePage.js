import { Button } from "react-bootstrap";

const UserProfilePage = () => {
  return (
    <div>
      <h3 className="fw-bold">الصفحة الشخصية</h3>

      <div className="bg-white shadow-sm px-2 py-3 d-flex justify-content-between mb-5">
        <div className="d-grid row-gap-2 ">
          <div>الإسم : <span className="text-secondary">نبيل نصرالدين</span></div>
          <div>رقم الهاتف : <span className="text-secondary">01023650518</span></div>
          <div>الإيميل : <span className="text-secondary">nabilnasreldeencs@gmail.com</span></div>
        </div>
        <span><i className="fas fa-pen"></i> تعديل</span>
      </div>

      <h3 className="fw-bold">تغيير كلمة السر</h3>
      <div className="d-grid row-gap-2">
      <input type="password" placeholder="كلمة السر القديمة" className="p-2 form-control rounded-0" />
      <input type="password" placeholder="كلمة السر الجديدة" className="p-2 form-control rounded-0" />
      <Button variant="dark" className="py-2 rounded-0 ms-auto">حفظ كلمة السر</Button>
      </div>

    </div>
  );
}

export default UserProfilePage;
