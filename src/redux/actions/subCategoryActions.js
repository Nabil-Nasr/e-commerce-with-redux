import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORIES, SUB_CATEGORY_ENABLE_LOADING, SUB_CATEGORY_ERROR } from "../types/subCategoryTypes";
import createRawDataItem from "./utils/createRawDataItem";
import getAllItems from "./utils/getAllItems";



export const subCategoryEnableLoading = () => ({ type: SUB_CATEGORY_ENABLE_LOADING });

export const getAllSubCategories = getAllItems({ url: "/api/v1/subcategories", GET_ALL_ITEMS: GET_ALL_SUB_CATEGORIES, ITEM_ERROR: SUB_CATEGORY_ERROR, itemEnableLoading: subCategoryEnableLoading });

export const createSubCategory = createRawDataItem({ url: "/api/v1/subcategories", CREATE_ITEM: CREATE_SUB_CATEGORY, ITEM_ERROR: SUB_CATEGORY_ERROR, itemEnableLoading: subCategoryEnableLoading });


