import { useDispatch } from "react-redux";
import { notify } from "../components/utils/ActionMessageContainer";
import validateSubmit from "../utils/validateSubmit";

const useRawData = (formAction) => {

  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const rawData = validateSubmit(event.target)

    if (!rawData) {
      return notify({ message: "من فضلك أكمل البيانات", type: "warning" });
    }

    const { error } = await dispatch(formAction(rawData));
    if (error) return;

    // when success submit reset everything
    event.target.reset();
  };


  return { handleSubmit };
};

export default useRawData;
