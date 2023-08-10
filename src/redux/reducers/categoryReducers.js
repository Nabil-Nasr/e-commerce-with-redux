import {  ALL_CATEGORIES_ENABLE_LOADING, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR, CREATE_CATEGORY, CREATE_CATEGORY_ERROR, CATEGORY_ENABLE_LOADING } from "../types";


export const allCategoriesReducer = (prevState = { loading: true, categories: [] }, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      action.payload.categories = action.payload.data
      delete action.payload.data;
      return {
        ...action.payload,
        loading: false
      };
    case ALL_CATEGORIES_ENABLE_LOADING:
      return {
        loading:true,
      };
    case GET_ALL_CATEGORIES_ERROR:
      return {
        ...prevState,
        loading:true,
        error: action.error,
      };

    default:
      return prevState;
  }
};


export const categoryReducer = (prevState = { loading: false}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...action.payload,
        loading: false
      };
    case CATEGORY_ENABLE_LOADING:
      return {
        loading:true,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        loading:false,
        error: action.error,
      };

    default:
      return prevState;
  }
};
