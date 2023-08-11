import { useState } from "react";
import uploadImg from "../assets/images/uploadImg.png";
import { useDispatch } from "react-redux";
import { notify } from "../components/utils/ActionMessageContainer";
import useUpdateEffect from "./useUpdateEffect";

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
    const formObject = Object.fromEntries(
      new FormData(event.target).entries()
    );

    if (!formObject.name || !formObject.image.name) {
      return notify({ message: "من فضلك أكمل البيانات", type: "warning" });
    }

    const { error } = await dispatch(formAction(formObject));
    if (error) return;

    // when success submit reset everything
    event.target.reset();
    setImgSrc(uploadImg);
  };
  return { handleSubmit, imgSrc, handleImageChange };
};

export default useFormData;
