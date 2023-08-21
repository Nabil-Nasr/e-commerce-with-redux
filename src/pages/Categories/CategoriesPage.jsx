import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import { categoryEnableLoading, getAllCategories } from "../../redux/actions/categoryActions";
import useGetAllItems from "../../hooks/useGetAllItems";

const CategoriesPage = () => {
  const { numberOfPages, applyPagination, currentPage } = useGetAllItems({ itemReducer: "category", getAllItems: getAllCategories, itemEnableLoading: categoryEnableLoading });

  return (
    <Container className="my-4">
      <CategoryCardsContainer title="كل التصنيفات" />
      <Pagination pageCount={numberOfPages} applyPagination={applyPagination} currentPage={currentPage} />
    </Container>
  );
};

export default CategoriesPage;

