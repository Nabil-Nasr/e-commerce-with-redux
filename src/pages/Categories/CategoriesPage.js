import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";

const CategoriesPage = () => {
  return (
    <>
      <Container className="my-4">
        <CategoryCardsContainer title="كل التصنيفات"/>
        <Pagination pageCount={40} applyPagination={()=>{}} currentPage={0}/>
      </Container>
    </>
  );
}

export default CategoriesPage;

