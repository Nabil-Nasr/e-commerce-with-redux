import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const updateFormDataItem = ({ url, UPDATE_ITEM, ITEM_ERROR, itemEnableLoading }) => (formData, id) => async (dispatch) => {
  const controller = new AbortController();
  const notifyId = notify({ message: "جاري حفظ التعديل 0%", type: "loading", data: { action: () => controller.abort() } });

  controller.signal.onabort = () => {
    setTimeout(() => {
      notify({ dismissId: notifyId });
      notify({ message: "تم إلغاء العملية", type: "warning" });
    }, 1000);
  };

  try {
    const config = {
      signal: controller.signal,
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.progress * 100));
        notify({ message: `جاري حفظ التعديل ${percentCompleted}%`, type: "loading", id: notifyId, progress: progressEvent.progress });
      }
    };

    dispatch(itemEnableLoading());
    const { data } = await baseURL.putForm(`${url}/${id}`, formData, config);

    notify({ message: "تم حفظ التعديل بنجاح", type: "success", id: notifyId });

    return dispatch({
      type: UPDATE_ITEM,
      payload: data
    });

  } catch ({ response, message }) {

    notify({ message: "حدث خطأ أثناء حفظ التعديل", type: "error", id: notifyId });
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default updateFormDataItem;
