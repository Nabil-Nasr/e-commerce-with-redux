import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const createRawDataItem = ({ url, CREATE_ITEM, ITEM_ERROR }) => (rawData) => async (dispatch) => {
  const notifyId = notify({ message: "جاري الحفظ", type: "loading" });

  try {
    const { data } = await baseURL.post(url, rawData);
    notify({ message: "تم الحفظ بنجاح", type: "success", id: notifyId });
    return dispatch({
      type: CREATE_ITEM,
      payload: data
    });

  } catch ({ response, message }) {
    notify({ message: "حدث خطأ أثناء الحفظ", type: "error", id: notifyId });
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default createRawDataItem;