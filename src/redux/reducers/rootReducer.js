import { combineReducers } from "redux";
import { allCategoriesReducer } from "./categoryReducers";

const rootReducer = combineReducers({
  allCategories:allCategoriesReducer
})

export default rootReducer
