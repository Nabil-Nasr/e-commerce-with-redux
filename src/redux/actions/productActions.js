import { ALL_PRODUCTS_ENABLE_LOADING, CREATE_PRODUCT, CREATE_PRODUCT_ERROR, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_ERROR, PRODUCT_ENABLE_LOADING } from "../types/productTypes";
import createFormDataItem from "./utils/createFormDataItem";
import getAllItems from "./utils/getAllItems";




export const allProductsEnableLoading = () => ({ type: ALL_PRODUCTS_ENABLE_LOADING });


export const getAllProducts = getAllItems({ url: "/api/v1/products", GET_ALL_ITEMS: GET_ALL_PRODUCTS, GET_ALL_ITEMS_ERROR: GET_ALL_PRODUCTS_ERROR, allItemsEnableLoadingAction: allProductsEnableLoading });



export const productEnableLoading = () => ({ type: PRODUCT_ENABLE_LOADING });

export const createProduct = createFormDataItem({ url: "/api/v1/products", CREATE_ITEM: CREATE_PRODUCT, CREATE_ITEM_ERROR: CREATE_PRODUCT_ERROR ,itemEnableLoadingAction:productEnableLoading});

