import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetItemsWithParams = ({ params = {}, getAllItemsAction, useEffectHook = useEffect }) => {
  const dispatch = useDispatch();
  // can be replaced with useUpdateEffect
  useEffectHook(() => {
    const controller = new AbortController();
    dispatch(getAllItemsAction({ params, signal: controller.signal }));
    return () => {
      controller.abort();
    };
  }, [params.keyword, params.category]);
};

export default useGetItemsWithParams;
