import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import { getAllCategories } from "../../redux/actions/categoryActions";
import useGetAllItems from "../../hooks/useGetAllItems";

const CategoriesPage = () => {
  const { limit, page, numberOfPages, applyPagination, currentPage } = useGetAllItems({allItemsReducer:"allCategories",getAllItemsAction:getAllCategories});

  return (
    <Container className="my-4">
      <CategoryCardsContainer title="كل التصنيفات" params={{ limit, page }} />
      <Pagination pageCount={numberOfPages} applyPagination={applyPagination} currentPage={currentPage} />
    </Container>
  );
};

export default CategoriesPage;

