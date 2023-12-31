import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT, PRODUCT_ENABLE_LOADING, PRODUCT_ERROR, UPDATE_PRODUCT } from "../types/productTypes";
import { itemReducer } from "./utils/itemReducer";



const productReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_PRODUCTS, GET_ITEM: GET_PRODUCT, CREATE_ITEM: CREATE_PRODUCT, UPDATE_ITEM: UPDATE_PRODUCT, DELETE_ITEM: DELETE_PRODUCT, ITEM_ENABLE_LOADING: PRODUCT_ENABLE_LOADING, ITEM_ERROR: PRODUCT_ERROR });


export default productReducer;