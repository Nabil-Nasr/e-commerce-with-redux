import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetItemsWithParams = ({ params = {}, getAllItems, useEffectHook = useEffect }) => {
  const dispatch = useDispatch();
  // can be replaced with useUpdateEffect
  useEffectHook(() => {
    const controller = new AbortController();
    dispatch(getAllItems({ params, signal: controller.signal }));
    return () => {
      controller.abort();
    };
  }, [params.keyword, params.category]);
};

export default useGetItemsWithParams;
