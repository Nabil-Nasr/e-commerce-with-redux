import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllInitialItems = ({allItemsReducer,params,getAllItemsAction,allItemsEnableLoadingAction}) => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(state => state[allItemsReducer]);


  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItemsAction({ params, signal: controller.signal }));
    return () => {
      controller.abort()
      dispatch(allItemsEnableLoadingAction())
    }
  }, []);

  return {data,loading}
}

export default useGetAllInitialItems;
