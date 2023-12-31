import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const createFormDataItem = ({ url, CREATE_ITEM, ITEM_ERROR, itemEnableLoading }) => (formData) => async (dispatch) => {
  const controller = new AbortController();
  const notifyId = notify({ message: "جاري الحفظ 0%", type: "loading", data: { action: () => controller.abort() } });

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
        notify({ message: `جاري الحفظ ${percentCompleted}%`, type: "loading", id: notifyId, progress: progressEvent.progress });
      }
    };

    dispatch(itemEnableLoading());
    const { data } = await baseURL.postForm(url, formData, config);

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

export default createFormDataItem;
