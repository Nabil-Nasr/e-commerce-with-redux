import {  useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetItemsWithParams = ({params={},getAllItemsAction}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItemsAction( {params, signal: controller.signal }));
    return () => {
      controller.abort()
    }
  }, [params.keyword]);
}

export default useGetItemsWithParams;
