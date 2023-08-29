import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useGetAllItems = ({ getAllItems, itemEnableLoading, params, remount }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemEnableLoading());
  }, []);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page");
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItems({ params: { page, ...params }, signal: controller.signal }));
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
