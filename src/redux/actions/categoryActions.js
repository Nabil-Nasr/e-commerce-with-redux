import { CATEGORY_ENABLE_LOADING, CATEGORY_ERROR, CREATE_CATEGORY, GET_ALL_CATEGORIES, GET_CATEGORY } from "../types/categoryTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";
import getItem from "./utils/getItem";



export const categoryEnableLoading = () => ({ type: CATEGORY_ENABLE_LOADING });

export const getAllCategories = getAllItems({ url: "/api/v1/categories", GET_ALL_ITEMS: GET_ALL_CATEGORIES, ITEM_ERROR: CATEGORY_ERROR, itemEnableLoading: categoryEnableLoading });

export const getCategory = getItem({ url: "/api/v1/categories", GET_ITEM: GET_CATEGORY, ITEM_ERROR: CATEGORY_ERROR });

export const createCategory = createFormDataItem({ url: "/api/v1/categories", CREATE_ITEM: CREATE_CATEGORY, ITEM_ERROR: CATEGORY_ERROR, itemEnableLoading: categoryEnableLoading });

