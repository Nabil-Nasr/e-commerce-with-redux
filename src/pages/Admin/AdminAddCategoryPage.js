import { Button } from "react-bootstrap";
import uploadImg from "../../assets/images/uploadImg.png";
import { useState } from "react";
import UploadImg from "../../components/utils/UploadImg/UploadImg";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryActions";
import ActionMessageContainer, { notify } from "../../components/utils/ActionMessageContainer";

const AdminAddCategoryPage = () => {
  const [imgSrc, setImgSrc] = useState(uploadImg);
  const handleImageChange = ({ target }) => {
    imgSrc === uploadImg && URL.revokeObjectURL(imgSrc);
    setImgSrc(target.files[0] ? URL.createObjectURL(target.files[0]) : uploadImg);
  };

  const dispatch = useDispatch();
  const { error } = useSelector(({ category }) => category);
  const handleSubmit = async(event) => {
    event.preventDefault();
    const formObject = Object.fromEntries(
      new FormData(event.target).entries()
    );

    if (!formObject.name || !formObject.image.name) {
      return notify({ message: "من فضلك أكمل البيانات", type: "warning" });
    }

    await dispatch(createCategory(formObject))
    if (error) return;
    event.target.reset();
    setImgSrc(uploadImg);
  };


  return (
    <div>
      <h3 className="fw-bold">إضافة تصنيف جديد</h3>
      <form onSubmit={handleSubmit}>
        <div className="text-secondary">
          <div>صورة التصنيف</div>
          <UploadImg imgSrc={imgSrc} htmlFor="upload-img" />
          <input type="file" onEnded={handleImageChange} onChange={handleImageChange} name="image" hidden accept="image/jpeg,image/webp,image/bmp,image/png,image/gif" id="upload-img" />
        </div>
        <div className="d-grid mt-3 row-gap-2">
          <input type="text" name="name" placeholder="إسم التصنيف" className="p-2 form-control rounded-0" />
          <Button type="submit" variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
        </div>
      </form>
      <ActionMessageContainer />
    </div>
  );
};

export default AdminAddCategoryPage;
