import { BRAND_ENABLE_LOADING, BRAND_ERROR, CREATE_BRAND, GET_ALL_BRANDS, GET_BRAND } from "../types/brandTypes";
import { itemReducer } from "./utils/itemReducer";



const brandReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_BRANDS, GET_ITEM: GET_BRAND, CREATE_ITEM: CREATE_BRAND, ITEM_ENABLE_LOADING: BRAND_ENABLE_LOADING, ITEM_ERROR: BRAND_ERROR });


export default brandReducer;