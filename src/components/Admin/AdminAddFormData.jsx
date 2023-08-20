import UploadImg from "../utils/UploadImg/UploadImg";
import { Button } from "react-bootstrap";
import useFormData from "../../hooks/useFormData";

const AdminAddFormData = ({ formAction, itemReducer, pageHeader, imgHeader, imgName,appendFormData, children }) => {
  const { handleSubmit, imgSrc, handleImageChange, loading } = useFormData({ formAction, itemReducer,appendFormData });
  
  return (
    <div>
      <h3 className="fw-bold">{pageHeader}</h3>
      <form
        onSubmit={
          loading 
          ? event => event.preventDefault()
          : handleSubmit
        }>
        <div className="text-secondary">
          <div>{imgHeader}</div>
          <UploadImg imgSrc={imgSrc} htmlFor="upload-img" />
          <input type="file" onChange={handleImageChange} name={imgName} hidden accept="image/jpeg,image/webp,image/bmp,image/png,image/gif" id="upload-img" />
        </div>
        <div className="d-grid mt-3 row-gap-2">
          {children}
          <Button type="submit" disabled={loading} variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddFormData;
