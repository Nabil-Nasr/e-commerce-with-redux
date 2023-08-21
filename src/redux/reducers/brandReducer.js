import { BRAND_ENABLE_LOADING, BRAND_ERROR, CREATE_BRAND, GET_ALL_BRANDS } from "../types/brandTypes";
import { itemReducer } from "./utils/itemReducer";



const brandReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_BRANDS, CREATE_ITEM: CREATE_BRAND, ITEM_ENABLE_LOADING: BRAND_ENABLE_LOADING, ITEM_ERROR: BRAND_ERROR });


export default brandReducer;