import { BRAND_ENABLE_LOADING, BRAND_ERROR, CREATE_BRAND, GET_ALL_BRANDS, GET_BRAND } from "../types/brandTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";
import getItem from "./utils/getItem";



export const brandEnableLoading = () => ({ type: BRAND_ENABLE_LOADING });

export const getAllBrands = getAllItems({ url: "/api/v1/brands", GET_ALL_ITEMS: GET_ALL_BRANDS, ITEM_ERROR: BRAND_ERROR, itemEnableLoading: brandEnableLoading });

export const getBrand = getItem({ url: "/api/v1/brands", GET_ITEM: GET_BRAND, ITEM_ERROR: BRAND_ERROR });

export const createBrand = createFormDataItem({ url: "/api/v1/brands", CREATE_ITEM: CREATE_BRAND, ITEM_ERROR: BRAND_ERROR, itemEnableLoading: brandEnableLoading });

