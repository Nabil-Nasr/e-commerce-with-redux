import baseURL from "../../../api/baseURL";

const getAllItems = ({ url, GET_ALL_ITEMS, GET_ALL_ITEMS_ERROR }) => ({ params, signal, ...config }) => async (dispatch) => {
  try {
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