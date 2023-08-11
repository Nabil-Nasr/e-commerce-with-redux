import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useUpdateEffect from "./useUpdateEffect";

const useGetAllItems = ({allItemsReducer,getAllItemsAction}) => {
  const limit = 3;
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
  useUpdateEffect(() => {
    const controller = new AbortController();
    dispatch(getAllItemsAction({ params: { limit, page }, signal: controller.signal }));
    return () => controller.abort();
  }, [page]);

  return { limit, page, numberOfPages, applyPagination, currentPage }
}

export default useGetAllItems;
