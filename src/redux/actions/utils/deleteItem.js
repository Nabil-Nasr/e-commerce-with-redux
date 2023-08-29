import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const deleteItem = ({ url, DELETE_ITEM, ITEM_ERROR }) => (id) => async (dispatch) => {
  const notifyId = notify({ message: "جاري الحذف", type: "loading" });
  try {
    await baseURL.delete(`${url}/${id}`);
    notify({ message: "تم الحذف بنجاح", type: "success", id: notifyId });
    return dispatch({
      type: DELETE_ITEM,
      payload: { id }
    });
    
  } catch ({ response, message }) {
    notify({ message: "حدث خطأ أثناء الحذف", type: "error", id: notifyId });
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default deleteItem;