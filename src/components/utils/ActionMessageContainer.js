import { ToastContainer, toast, Bounce, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const messageTypes = ["success", "error", "warning", "info", "loading"];

export const notify = ({ message, type, id = null, progress, ...customOptions }) => {
  const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    // this to prevent autoClose after progress 100%
    progress: progress >= 0.9999999999 ? 0.9999999999 : progress,
    theme: "light",
    transition: type === "success" ? Slide : Bounce,
    ...customOptions
  };

  if (id !== null) {
    return toast.update(id, { ...options, render: message, type, isLoading: type === "loading" });
  } else if (messageTypes.includes(type)) {
    return toast[type](message, options);
  }
  return toast.warn(message, options);
};

const ActionMessageContainer = () =>
  <ToastContainer
    newestOnTop
    rtl
    pauseOnFocusLoss
  />;

export default ActionMessageContainer;