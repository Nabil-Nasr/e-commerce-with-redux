import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useGetAllItems = ({ getAllItems, itemEnableLoading, responseFields }) => {
  const limit = 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemEnableLoading());
  }, []);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page");
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItems({ params: { limit, page, fields: responseFields }, signal: controller.signal }));
    return () => controller.abort();
  }, [page]);

  const applyPagination = (page) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page);
      return searchParams;
    });
  };

  return { applyPagination };
};

export default useGetAllItems;
