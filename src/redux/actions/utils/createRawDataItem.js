import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const createRawDataItem = ({ url, CREATE_ITEM, ITEM_ERROR }) => (rawData) => async (dispatch) => {
  const id = notify({ message: "جاري الحفظ", type: "loading" });

  try {
    const { data } = await baseURL.post(url, rawData);
    notify({ message: "تم الحفظ بنجاح", type: "success", id });
    return dispatch({
      type: CREATE_ITEM,
      payload: data
    });

  } catch ({ response, message }) {
    notify({ message: "حدث خطأ أثناء الحفظ", type: "error", id });
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default createRawDataItem;