import { CREATE_PRODUCT, GET_ALL_PRODUCTS, PRODUCT_ENABLE_LOADING, PRODUCT_ERROR } from "../types/productTypes";
import { itemReducer } from "./utils/itemReducer";



const productReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_PRODUCTS, CREATE_ITEM: CREATE_PRODUCT, ITEM_ENABLE_LOADING: PRODUCT_ENABLE_LOADING, ITEM_ERROR: PRODUCT_ERROR });


export default productReducer;