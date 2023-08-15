import { CREATE_SUB_CATEGORY, CREATE_SUB_CATEGORY_ERROR, ALL_SUB_CATEGORIES_ENABLE_LOADING, SUB_CATEGORY_ENABLE_LOADING, GET_ALL_SUB_CATEGORIES, GET_ALL_SUB_CATEGORIES_ERROR } from "../types/subCategoryTypes";
import createRawDataItem from "./utils/createRawDataItem";
import getAllItems from "./utils/getAllItems";




export const allSubCategoriesEnableLoading = () => ({ type: ALL_SUB_CATEGORIES_ENABLE_LOADING });


export const getAllSubCategories = getAllItems({ url: "/api/v1/subcategories", GET_ALL_ITEMS: GET_ALL_SUB_CATEGORIES, GET_ALL_ITEMS_ERROR: GET_ALL_SUB_CATEGORIES_ERROR, allItemsEnableLoadingAction: allSubCategoriesEnableLoading });



export const createSubCategory = createRawDataItem({ url: "/api/v1/subcategories", CREATE_ITEM: CREATE_SUB_CATEGORY, CREATE_ITEM_ERROR: CREATE_SUB_CATEGORY_ERROR });



export const subCategoryEnableLoading = () => ({ type: SUB_CATEGORY_ENABLE_LOADING });