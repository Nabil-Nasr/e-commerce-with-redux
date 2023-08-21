import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useGetAllItems = ({ allItemsReducer, getAllItemsAction }) => {
  const limit = 7;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const applyPagination = (page) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page);
      return searchParams;
    });
  };

  const { paginationResult: { currentPage, numberOfPages } = {} } = useSelector(state => state[allItemsReducer]);

  const page = searchParams.get("page");
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItemsAction({ params: { limit, page, fields: "name,image" }, signal: controller.signal }));
    return () => controller.abort();
  }, [page]);

  return { numberOfPages, applyPagination, currentPage };
};

export default useGetAllItems;
