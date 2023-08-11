import { ToastContainer, toast, Bounce, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const messageTypes = ["success", "error", "warning", "info", "loading"];




toast.onChange((toastItem) => {
  if (toastItem.status === "removed" && toastItem.type === "loading" && toastItem.data.action) {
    toastItem.data?.action();
  }
});


export const notify = ({ message, type, id = null, progress, dismissId = null, ...customOptions }) => {
  if (dismissId !== null) {
    return toast.dismiss(dismissId);
  }
  const options = {
    closeButton:true,
    autoClose:5000,
    // this to prevent autoClose after progress 100%
    progress: progress >= 0.9999999999 ? 0.9999999999 : progress,
    theme: "light",
    transition: type === "success" ? Slide : Bounce,
    ...customOptions
  };

  if (id !== null) {
    return toast.update(id, { ...options, render: message, type, isLoading: type === "loading"});
  } else if (messageTypes.includes(type)) {
    return toast[type](message, options);
  }
  return toast.warn(message, options);
};

const ActionMessageContainer = () => (
  <ToastContainer
    newestOnTop
    rtl
    closeOnClick={false}
  />
);

export default ActionMessageContainer;