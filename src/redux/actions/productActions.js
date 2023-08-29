import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT, PRODUCT_ENABLE_LOADING, PRODUCT_ERROR, UPDATE_PRODUCT } from "../types/productTypes";
import createFormDataItem from "./utils/createFormDataItem";
import deleteItem from "./utils/deleteItem";
import getAllItems from "./utils/getAllItems";
import getItem from "./utils/getItem";
import updateFormDataItem from "./utils/updateFormDataItem";


export const productEnableLoading = () => ({ type: PRODUCT_ENABLE_LOADING });

const url = "/api/v1/products";

export const getAllProducts = getAllItems({ url, GET_ALL_ITEMS: GET_ALL_PRODUCTS, ITEM_ERROR: PRODUCT_ERROR, itemEnableLoading: productEnableLoading });

export const getProduct = getItem({ url, GET_ITEM: GET_PRODUCT, ITEM_ERROR: PRODUCT_ERROR });

export const createProduct = createFormDataItem({ url, CREATE_ITEM: CREATE_PRODUCT, ITEM_ERROR: PRODUCT_ERROR, itemEnableLoading: productEnableLoading });

export const updateProduct = updateFormDataItem({ url, UPDATE_ITEM: UPDATE_PRODUCT, ITEM_ERROR: PRODUCT_ERROR, itemEnableLoading: productEnableLoading });

export const deleteProduct = deleteItem({ url, DELETE_ITEM: DELETE_PRODUCT, ITEM_ERROR: PRODUCT_ERROR });
