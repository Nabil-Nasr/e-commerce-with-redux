import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const useGetAllItems = ({ itemReducer, getAllItems, itemEnableLoading }) => {
  const limit = 7;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemEnableLoading());
  }, []);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page");
  useEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItems({ params: { limit, page, fields: "name,image" }, signal: controller.signal }));
    return () => controller.abort();
  }, [page]);

  const applyPagination = (page) => {
    setSearchParams((searchParams) => {
      searchParams.set("page", page);
      return searchParams;
    });
  };

  const { paginationResult: { currentPage, numberOfPages } } = useSelector(state => state[itemReducer]);


  return { numberOfPages, applyPagination, currentPage };
};

export default useGetAllItems;
