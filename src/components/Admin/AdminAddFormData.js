import UploadImg from "../utils/UploadImg/UploadImg";
import { Button } from "react-bootstrap";
import ActionMessageContainer from "../utils/ActionMessageContainer";
import useFormData from "../../hooks/useFormData";

const AdminAddFormData = ({ formAction,pageHeader,imgHeader,imgName,children}) => {
  const { handleSubmit, imgSrc, handleImageChange } = useFormData(formAction);
  return (
    <div>
      <h3 className="fw-bold">{pageHeader}</h3>
      <form onSubmit={handleSubmit}>
        <div className="text-secondary">
          <div>{imgHeader}</div>
          <UploadImg imgSrc={imgSrc} htmlFor="upload-img" />
          <input type="file" onChange={handleImageChange} name={imgName} hidden accept="image/jpeg,image/webp,image/bmp,image/png,image/gif" id="upload-img" />
        </div>
        <div className="d-grid mt-3 row-gap-2">
          {children}
          <Button type="submit" variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
        </div>
      </form>
      <ActionMessageContainer />
    </div>
  );
}

export default AdminAddFormData;
