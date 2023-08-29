import UploadImg from "../utils/UploadImg/UploadImg";
import { Button } from "react-bootstrap";
import useFormData from "../../hooks/useFormData";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { useRef } from "react";
import fileUrlIntoFileInput from "../../utils/fileUrlIntoFileInput";


const AdminFormData = ({ formAction, itemReducer, pageHeader, imgHeader, imgName, imgUrl, children }) => {
  const { handleSubmit, imgSrc, setImgSrc, handleImageChange, loading } = useFormData({ formAction, itemReducer });

  const imageInputRef = useRef(null);

  useUpdateEffect(() => {
    if (imgUrl)
      fileUrlIntoFileInput(imgUrl, imageInputRef.current, "image")
        .then(() => {
          setImgSrc(URL.createObjectURL(imageInputRef.current.files[0]));
        });
  }, [imgUrl]);

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
          <input type="file" ref={imageInputRef} onChange={handleImageChange} name={imgName} hidden accept="image/jpeg,image/webp,image/gif,image/png" id="upload-img" />
        </div>
        <div className="d-grid mt-3 row-gap-2">
          {children}
          <Button type="submit" disabled={loading} variant="dark" className="py-2 rounded-0 ms-auto">حفظ التعديلات</Button>
        </div>
      </form>
    </div>
  );
};

export default AdminFormData;
