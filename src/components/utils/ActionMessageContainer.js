import { ToastContainer, toast,Flip,Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const messageTypes = ["success","error","warning","info","loading"]

export const notify = ({message,type})=>{
  const options={
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition:type==="success"?Flip:Bounce,
  }

  if(messageTypes.includes(type)){
    return toast[type](message,options)
  }
  return toast.warn(message,options)
}

const ActionMessageContainer = ()=>
  <ToastContainer
  newestOnTop
  rtl
  pauseOnFocusLoss
  />

export default ActionMessageContainer;