import { combineReducers } from "redux";
import { allCategoriesReducer, categoryReducer } from "./categoryReducers";

const rootReducer = combineReducers({
  allCategories:allCategoriesReducer,
  category:categoryReducer
})

export default rootReducer
