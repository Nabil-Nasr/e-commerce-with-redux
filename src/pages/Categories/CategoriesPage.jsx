import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import { categoryEnableLoading, getAllCategories } from "../../redux/actions/categoryActions";
import useGetAllItems from "../../hooks/useGetAllItems";
import { categoryCardFields } from "../../utils/itemRequestQueries";

const CategoriesPage = () => {
  const { applyPagination } = useGetAllItems({ getAllItems: getAllCategories, itemEnableLoading: categoryEnableLoading, responseFields: categoryCardFields });

  return (
    <Container className="my-4">
      <CategoryCardsContainer title="كل التصنيفات" />
      <Pagination itemReducer="category" applyPagination={applyPagination} />
    </Container>
  );
};

export default CategoriesPage;

