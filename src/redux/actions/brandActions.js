import { ALL_BRANDS_ENABLE_LOADING, BRAND_ENABLE_LOADING, CREATE_BRAND, CREATE_BRAND_ERROR, GET_ALL_BRANDS, GET_ALL_BRANDS_ERROR } from "../types/brandTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";


export const allBrandsEnableLoading = () => ({ type: ALL_BRANDS_ENABLE_LOADING });

export const getAllBrands = getAllItems({ url: "/api/v1/brands", GET_ALL_ITEMS: GET_ALL_BRANDS, GET_ALL_ITEMS_ERROR: GET_ALL_BRANDS_ERROR,allItemsEnableLoadingAction:allBrandsEnableLoading });


export const createBrand = createFormDataItem({ url: "/api/v1/brands", CREATE_ITEM: CREATE_BRAND, CREATE_ITEM_ERROR: CREATE_BRAND_ERROR });


export const brandEnableLoading = () => ({ type: BRAND_ENABLE_LOADING });