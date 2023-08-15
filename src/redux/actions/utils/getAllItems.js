import baseURL from "../../../api/baseURL";

const getAllItems = ({ url, GET_ALL_ITEMS, GET_ALL_ITEMS_ERROR, allItemsEnableLoadingAction }) => ({ params = {}, signal, ...config }) => async (dispatch) => {
  try {
    // this to avoid loading when using pagination
    if (!params.page)
      dispatch(allItemsEnableLoadingAction());
    const { data } = await baseURL.get(url,
      { params, signal, ...config });
    dispatch({
      type: GET_ALL_ITEMS,
      payload: data
    });
  } catch ({ response, message }) {
    dispatch({
      type: GET_ALL_ITEMS_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default getAllItems;