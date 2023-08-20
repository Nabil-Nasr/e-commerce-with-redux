import { combineReducers } from "redux";
import { allCategoriesReducer, categoryReducer } from "./categoryReducers";
import { allBrandsReducer, brandReducer } from "./brandReducers";
import { allSubCategoriesReducer, subCategoryReducer } from "./subCategoryReducers";
import { allProductsReducer, productReducer } from "./productReducers";

const rootReducer = combineReducers({
  allCategories:allCategoriesReducer,
  category:categoryReducer,

  allBrands:allBrandsReducer,
  brand:brandReducer,

  allSubCategories:allSubCategoriesReducer,
  subCategory:subCategoryReducer,
  
  allProducts:allProductsReducer,
  product:productReducer
})

export default rootReducer
