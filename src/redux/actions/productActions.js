import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT, PRODUCT_ENABLE_LOADING, PRODUCT_ERROR } from "../types/productTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";
import getItem from "./utils/getItem";


export const productEnableLoading = () => ({ type: PRODUCT_ENABLE_LOADING });

export const getAllProducts = getAllItems({ url: "/api/v1/products", GET_ALL_ITEMS: GET_ALL_PRODUCTS, ITEM_ERROR: PRODUCT_ERROR, itemEnableLoading: productEnableLoading });

export const getProduct = getItem({ url: "/api/v1/products", GET_ITEM: GET_PRODUCT, ITEM_ERROR: PRODUCT_ERROR });

export const createProduct = createFormDataItem({ url: "/api/v1/products", CREATE_ITEM: CREATE_PRODUCT, ITEM_ERROR: PRODUCT_ERROR, itemEnableLoading: productEnableLoading });

