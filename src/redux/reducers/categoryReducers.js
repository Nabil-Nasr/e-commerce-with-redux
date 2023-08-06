import { GET_ALL_CATEGORIES, GET_ERROR } from "../types";


export const allCategoriesReducer = (prevState = { loading: true, categories: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      action.payload.categories = action.payload.data
      delete action.payload.data;
      return {
        ...action.payload,
        loading: false
      };
      
    case GET_ERROR:
      return {
        ...prevState,
        loading:true,
        error: action.error,
      };

    default:
      return prevState;
  }
};
