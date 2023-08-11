import { GET_ALL_BRANDS, ALL_BRANDS_ENABLE_LOADING, GET_ALL_BRANDS_ERROR, CREATE_BRAND, BRAND_ENABLE_LOADING, CREATE_BRAND_ERROR } from "../types/brandTypes";
import { allItemsReducer, itemReducer } from "./utils/itemReducers";


export const allBrandsReducer = allItemsReducer({ GET_ALL_ITEMS: GET_ALL_BRANDS, ALL_ITEMS_ENABLE_LOADING: ALL_BRANDS_ENABLE_LOADING, GET_ALL_ITEMS_ERROR: GET_ALL_BRANDS_ERROR });


export const brandReducer = itemReducer({ CREATE_ITEM: CREATE_BRAND, ITEM_ENABLE_LOADING: BRAND_ENABLE_LOADING, CREATE_ITEM_ERROR: CREATE_BRAND_ERROR });