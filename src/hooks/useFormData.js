import { useState } from "react";
import uploadImg from "../assets/images/uploadImg.png";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../components/utils/ActionMessageContainer";
import useUpdateEffect from "./useUpdateEffect";
import validateSubmit from "../utils/validateSubmit";

const useFormData = ({ formAction, itemReducer = "category",appendFormData }) => {
  const [imgSrc, setImgSrc] = useState(uploadImg);
  const handleImageChange = ({ target }) => {
    setImgSrc(target.files[0] ? URL.createObjectURL(target.files[0]) : uploadImg);
  };

  // when updating imgSrc remove the previous img url from memory
  // or when unmounting the component
  useUpdateEffect(() => {
    return () => {
      if (imgSrc !== uploadImg) URL.revokeObjectURL(imgSrc);
    };
  }, [imgSrc]);

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateSubmit(event.target)) {
      return notify({ message: "من فضلك أكمل البيانات", type: "warning" });
    }

    const formData = new FormData(event.target);
    await appendFormData?.(formData);
    const { error } = await dispatch(formAction(formData));
    if (error) return;

    // when success submit reset everything
    event.target.reset();
    setImgSrc(uploadImg);
  };

  const { loading } = useSelector(state => state[itemReducer]);

  return { handleSubmit, imgSrc, handleImageChange, loading };
};

export default useFormData;
