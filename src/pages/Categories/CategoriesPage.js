import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { useSearchParams } from "react-router-dom";
import useUpdateEffect from "../../hooks/useUpdateEffect";

const CategoriesPage = () => {
  const limit = 3;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  const applyPagination = (page) => {

    setSearchParams((searchParams) => {
      searchParams.set("page", page);
      return searchParams;
    });
  };

  const { paginationResult: { currentPage, numberOfPages } = {} } = useSelector(({ allCategories }) => allCategories);

  const page = searchParams.get("page");
  useUpdateEffect(() => {
    const controller = new AbortController();
    dispatch(getAllCategories({ params: { limit, page }, signal: controller.signal }));
    return () => controller.abort();
  }, [page]);



  return (
    <>
      <Container className="my-4">
        <CategoryCardsContainer title="كل التصنيفات" params={{ limit, page }} />
        <Pagination pageCount={numberOfPages} applyPagination={applyPagination} currentPage={currentPage} />
      </Container>
    </>
  );
};

export default CategoriesPage;

