import { useEffect } from "react";
import { notify } from "../components/utils/ActionMessageContainer";

const useAppMount = () => {
  useEffect(() => {

    const controller = new AbortController();

    const connectionConfig = { signal: controller.signal };

    // waiting one second before deciding that there is no connection
    const offlineListener = () => {
      const notifyId = window.navigator.clipboard.notifyId;
      if (!notifyId) {
        window.navigator.clipboard.notifyId = notify({ message: "تحقق من إتصالك بالإنترنت", type: "error", autoClose: false });
      } else {
        notify({ message: "تم فقد الإتصال بالإنترنت", type: "error", autoClose: false });
      }
    };

    const onlineListener = () => {
      const notifyId = window.navigator.clipboard.notifyId;
      if (notifyId) {
        notify({ message: "تم إسترجاع الإتصال بالإنترنت", type: "success", autoClose: false });
      }
    };


    window.addEventListener("offline", offlineListener, connectionConfig);
    window.addEventListener("online", onlineListener, connectionConfig);


    return () => controller.abort();

  }, []);
};

export default useAppMount;
