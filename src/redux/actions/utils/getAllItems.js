import baseURL from "../../../api/baseURL";

const getAllItems = ({ url, GET_ALL_ITEMS, ITEM_ERROR, itemEnableLoading }) => ({ params = {}, signal, ...config }) => async (dispatch) => {
  try {
    // this to avoid loading when using pagination
    if (!params.page)
      dispatch(itemEnableLoading());
    const { data } = await baseURL.get(url,
      { params, signal, ...config });
    return dispatch({
      type: GET_ALL_ITEMS,
      payload: data
    });
  } catch ({ response, message }) {
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default getAllItems;