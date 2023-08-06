import baseURL from "../../api/baseURL";
import { GET_ALL_CATEGORIES, GET_ERROR } from "../types";

export const getAllCategories = (params) => async (dispatch) => {
  try {
    const { data } = await baseURL.get("/api/v1/categories",{params});
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: data
    });
  } catch ({ response, message }) {
    dispatch({
      type: GET_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};