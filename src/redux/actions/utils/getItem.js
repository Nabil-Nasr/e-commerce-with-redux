import baseURL from "../../../api/baseURL";

const getItem = ({ url, GET_ITEM, ITEM_ERROR }) => ({ params: { id }, signal, config }) => async (dispatch) => {
  try {
    const { data } = await baseURL.get(`${url}/${id}`, { signal, ...config });
    return dispatch({
      type: GET_ITEM,
      payload: data
    });
  } catch ({ response, message }) {
    return dispatch({
      type: ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};

export default getItem;