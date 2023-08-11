import { ALL_CATEGORIES_ENABLE_LOADING, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR, CREATE_CATEGORY, CREATE_CATEGORY_ERROR, CATEGORY_ENABLE_LOADING } from "../types/categoryTypes";
import { allItemsReducer, itemReducer } from "./utils/itemReducers";


export const allCategoriesReducer = allItemsReducer({ GET_ALL_ITEMS: GET_ALL_CATEGORIES, ALL_ITEMS_ENABLE_LOADING: ALL_CATEGORIES_ENABLE_LOADING, GET_ALL_ITEMS_ERROR: GET_ALL_CATEGORIES_ERROR });


export const categoryReducer = itemReducer({ CREATE_ITEM: CREATE_CATEGORY, ITEM_ENABLE_LOADING: CATEGORY_ENABLE_LOADING, CREATE_ITEM_ERROR: CREATE_CATEGORY_ERROR });
