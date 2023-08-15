import { combineReducers } from "redux";
import { allCategoriesReducer, categoryReducer } from "./categoryReducers";
import { allBrandsReducer, brandReducer } from "./brandReducers";
import { allSubCategoriesReducer, subCategoryReducer } from "./subCategoryReducers";

const rootReducer = combineReducers({
  allCategories:allCategoriesReducer,
  category:categoryReducer,
  allBrands:allBrandsReducer,
  brand:brandReducer,
  allSubCategories:allSubCategoriesReducer,
  subCategory:subCategoryReducer
})

export default rootReducer
