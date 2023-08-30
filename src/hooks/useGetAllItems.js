import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useGetAllItems = ({ getAllItems, itemEnableLoading, params, remount }) => {
  useEffect(() => {
    dispatch(itemEnableLoading());
  }, []);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const searchParamsObject = Object.fromEntries(searchParams.entries());

    dispatch(getAllItems({ params: { ...searchParamsObject, ...params }, signal: controller.signal }));
    return () => controller.abort();
  }, [location.search, remount]);

  const applyPagination = (page) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page);
      return searchParams;
    });
  };

  return { applyPagination };
};

export default useGetAllItems;
