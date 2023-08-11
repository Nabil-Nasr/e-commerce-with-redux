import { ALL_BRANDS_ENABLE_LOADING, BRAND_ENABLE_LOADING, CREATE_BRAND, CREATE_BRAND_ERROR, GET_ALL_BRANDS, GET_ALL_BRANDS_ERROR } from "../types/brandTypes";
import createItem from "./utils/createItem";
import getAllItems from "./utils/getAllItems";

export const getAllBrands = getAllItems({ url: "/api/v1/brands", GET_ALL_ITEMS: GET_ALL_BRANDS, GET_ALL_ITEMS_ERROR: GET_ALL_BRANDS_ERROR });



export const allBrandsEnableLoading = () => ({ type: ALL_BRANDS_ENABLE_LOADING });



export const createBrand = createItem({ url: "/api/v1/brands", CREATE_ITEM: CREATE_BRAND, CREATE_ITEM_ERROR: CREATE_BRAND_ERROR });


export const brandEnableLoading = () => ({ type: BRAND_ENABLE_LOADING });