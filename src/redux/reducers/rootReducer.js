import { combineReducers } from "redux";
import { allCategoriesReducer, categoryReducer } from "./categoryReducers";
import { allBrandsReducer, brandReducer } from "./brandReducers";

const rootReducer = combineReducers({
  allCategories:allCategoriesReducer,
  category:categoryReducer,
  allBrands:allBrandsReducer,
  brand:brandReducer
})

export default rootReducer
