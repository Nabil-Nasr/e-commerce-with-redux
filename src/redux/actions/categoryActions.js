import baseURL from "../../api/baseURL";
import { notify } from "../../components/utils/ActionMessageContainer";
import {  CREATE_CATEGORY, CREATE_CATEGORY_ERROR, ALL_CATEGORIES_ENABLE_LOADING,CATEGORY_ENABLE_LOADING, GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_ERROR } from "../types";

export const getAllCategories = ({params,signal,...config}) => async (dispatch) => {
  try {
    const { data } = await baseURL.get("/api/v1/categories",
    {params,signal,...config});
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: data
    });
  } catch ({ response, message }) {
    dispatch({
      type: GET_ALL_CATEGORIES_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
};



export const allCategoriesEnableLoading = ()=>({type:ALL_CATEGORIES_ENABLE_LOADING})



export const createCategory = (formObject)=>async(dispatch)=>{
  const id = notify({message:"جاري الحفظ 0%",type:"loading"})
  try {
    const config = {
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        notify({message:`جاري الحفظ ${percentCompleted}%`,type:"loading",id,progress:percentCompleted/100})
      }
    }
    const {data} = await baseURL.postForm("/api/v1/categories",formObject,config)

    notify({message:"تم الحفظ بنجاح",type:"success",id})

    dispatch({
      type:CREATE_CATEGORY,
      payload:data
    })
    
  } catch ({ response, message }) {
    notify({message:"حدث خطأ أثناء الحفظ",type:"error",id})
    dispatch({
      type: CREATE_CATEGORY_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
}


export const categoryEnableLoading = ()=>({type:CATEGORY_ENABLE_LOADING})