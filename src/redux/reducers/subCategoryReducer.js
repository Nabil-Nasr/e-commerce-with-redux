import { CREATE_SUB_CATEGORY, GET_ALL_SUB_CATEGORIES, SUB_CATEGORY_ENABLE_LOADING, SUB_CATEGORY_ERROR } from "../types/subCategoryTypes";
import { itemReducer } from "./utils/itemReducer";



const subCategoryReducer = itemReducer({ GET_ALL_ITEMS: GET_ALL_SUB_CATEGORIES, CREATE_ITEM: CREATE_SUB_CATEGORY, ITEM_ENABLE_LOADING: SUB_CATEGORY_ENABLE_LOADING, ITEM_ERROR: SUB_CATEGORY_ERROR });


export default subCategoryReducer;