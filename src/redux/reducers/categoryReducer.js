import { CATEGORY_ENABLE_LOADING, CATEGORY_ERROR, CREATE_CATEGORY, GET_ALL_CATEGORIES } from "../types/categoryTypes";
import { itemReducer } from "./utils/itemReducer";



const categoryReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_CATEGORIES, CREATE_ITEM: CREATE_CATEGORY, ITEM_ENABLE_LOADING: CATEGORY_ENABLE_LOADING, ITEM_ERROR: CATEGORY_ERROR });


export default categoryReducer;