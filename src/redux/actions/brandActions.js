import { BRAND_ENABLE_LOADING, BRAND_ERROR, CREATE_BRAND, GET_ALL_BRANDS } from "../types/brandTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";



export const brandEnableLoading = () => ({ type: BRAND_ENABLE_LOADING });

export const getAllBrands = getAllItems({ url: "/api/v1/brands", GET_ALL_ITEMS: GET_ALL_BRANDS, ITEM_ERROR: BRAND_ERROR, itemEnableLoading: brandEnableLoading });

export const createBrand = createFormDataItem({ url: "/api/v1/brands", CREATE_ITEM: CREATE_BRAND, ITEM_ERROR: BRAND_ERROR, itemEnableLoading: brandEnableLoading });

