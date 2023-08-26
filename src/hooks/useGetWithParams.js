import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetWithParams = ({ params = {}, getAction, useEffectHook = useEffect, returnPayload = false }) => {
  let payload, setPayload;
  if (returnPayload) {
    // to use payload instead of useSelector to use multiple card containers in the same page
    // eslint-disable-next-line react-hooks/rules-of-hooks
    [payload, setPayload] = useState({ itemsData: [], itemData: {}, loading: true, error: null });
  }


  const dispatch = useDispatch();
  // can be replaced with useUpdateEffect
  useEffectHook(() => {
    const controller = new AbortController();


    // then method will be called after dispatching the action and the reducer but it get the dispatched object only not the reducer returned value (the object can be manipulated in the reducer with reference assignment) 
    dispatch(getAction({ params, signal: controller.signal }))
      .then(action => setPayload?.(prevState => {
        if (action.payload) {
          return {
            ...prevState,
            ...action.payload,
            loading: false,
            error: null
          };
        } else if (action.error) {
          return {
            ...prevState,
            loading: false,
            error: action.error,
          };
        }
        return prevState;
      }));

    return () => {
      controller.abort();
    };
  }, [params.keyword, params.category, params.id]);

  if (returnPayload) {
    return { payload };
  }
};

export default useGetWithParams;
