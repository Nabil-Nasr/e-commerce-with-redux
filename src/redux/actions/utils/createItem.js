import baseURL from "../../../api/baseURL";
import { notify } from "../../../components/utils/ActionMessageContainer";

const createItem = ({url,CREATE_ITEM,CREATE_ITEM_ERROR})=>(formObject)=>async(dispatch)=>{
  const controller = new AbortController()
  const id = notify({message:"جاري الحفظ 0%",type:"loading",data:{action:()=>controller.abort()}})

  controller.signal.onabort = ()=>{
    setTimeout(()=>{
      notify({dismissId:id})
      notify({message:"تم الإلغاء",type:"warning"})
    },1000)
  }

  try {
    const config = {
      signal:controller.signal,
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.progress*100))
        notify({message:`جاري الحفظ ${percentCompleted}%`,type:"loading",id,progress:progressEvent.progress})
      }
    }

    const {data} = await baseURL.postForm(url,formObject,{...config})

    notify({message:"تم الحفظ بنجاح",type:"success",id})

    return dispatch({
      type:CREATE_ITEM,
      payload:data
    })
    
  } catch ({ response, message }) {

    notify({message:"حدث خطأ أثناء الحفظ",type:"error",id})
    return dispatch({
      type: CREATE_ITEM_ERROR,
      error: `Error: ${response ? response.data?.message : message}`
    });
  }
}

export default createItem;
