import baseURL from "../../../api/baseURL";

const getAllItems = ({ url, GET_ALL_ITEMS, ITEM_ERROR, itemEnableLoading }) => ({ params = {}, signal }) => async (dispatch) => {
  try {
    // this to avoid loading when using pagination
    if (!params.page)
      dispatch(itemEnableLoading());
    const { data } = await baseURL.get(url,
      { params, signal });
    return dispatch({
      type: GET_ALL_ITEMS,
      payload: data
    });
  } catch ({ response, message }) {

    if (message === "canceled") return;

    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default getAllItems;