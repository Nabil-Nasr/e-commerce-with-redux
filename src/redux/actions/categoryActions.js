import { CREATE_CATEGORY, CREATE_CATEGORY_ERROR, ALL_CATEGORIES_ENABLE_LOADING, CATEGORY_ENABLE_LOADING, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR } from "../types/categoryTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";




export const allCategoriesEnableLoading = () => ({ type: ALL_CATEGORIES_ENABLE_LOADING });


export const getAllCategories = getAllItems({ url: "/api/v1/categories", GET_ALL_ITEMS: GET_ALL_CATEGORIES, GET_ALL_ITEMS_ERROR: GET_ALL_CATEGORIES_ERROR, allItemsEnableLoadingAction: allCategoriesEnableLoading });



export const categoryEnableLoading = () => ({ type: CATEGORY_ENABLE_LOADING });

export const createCategory = createFormDataItem({ url: "/api/v1/categories", CREATE_ITEM: CREATE_CATEGORY, CREATE_ITEM_ERROR: CREATE_CATEGORY_ERROR ,itemEnableLoadingAction:categoryEnableLoading});

