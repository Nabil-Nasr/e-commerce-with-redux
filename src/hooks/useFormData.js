import { useState } from "react";
import uploadImg from "../assets/images/uploadImg.png";
import { useDispatch } from "react-redux";
import { notify } from "../components/utils/ActionMessageContainer";
import useUpdateEffect from "./useUpdateEffect";
import validateSubmit from "../utils/validateSubmit";

const useFormData = (formAction) => {
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
    const { error } = await dispatch(formAction(formData));
    if (error) return;

    // when success submit reset everything
    event.target.reset();
    setImgSrc(uploadImg);
  };


  return { handleSubmit, imgSrc, handleImageChange };
};

export default useFormData;
