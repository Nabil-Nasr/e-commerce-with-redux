import { CREATE_CATEGORY, CREATE_CATEGORY_ERROR, ALL_CATEGORIES_ENABLE_LOADING, CATEGORY_ENABLE_LOADING, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR } from "../types/categoryTypes";
import createItem from "./utils/createItem";
import getAllItems from "./utils/getAllItems";

export const getAllCategories = getAllItems({ url: "/api/v1/categories", GET_ALL_ITEMS: GET_ALL_CATEGORIES, GET_ALL_ITEMS_ERROR: GET_ALL_CATEGORIES_ERROR });



export const allCategoriesEnableLoading = () => ({ type: ALL_CATEGORIES_ENABLE_LOADING });



export const createCategory = createItem({ url: "/api/v1/categories", CREATE_ITEM: CREATE_CATEGORY, CREATE_ITEM_ERROR: CREATE_CATEGORY_ERROR });


export const categoryEnableLoading = () => ({ type: CATEGORY_ENABLE_LOADING });