import { Container } from "react-bootstrap";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryActions";

const CategoriesPage = () => {
  const limit = 3
  const dispatch = useDispatch()
  const applyPagination = (page)=>{

    dispatch(getAllCategories({limit,page}));
  }
  const {paginationResult:{currentPage,numberOfPages}={}}=useSelector(({allCategories})=>allCategories)

  return (
    <>
      <Container className="my-4">
        <CategoryCardsContainer title="كل التصنيفات" params={{limit}} />
        <Pagination pageCount={numberOfPages} applyPagination={applyPagination} currentPage={currentPage}/>
      </Container>
    </>
  );
}

export default CategoriesPage;

