import { Container } from "react-bootstrap";
import Pagination from "../../components/utils/Pagination/Pagination";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";
import useGetAllItems from "../../hooks/useGetAllItems";
import { getAllBrands } from "../../redux/actions/brandActions";

const BrandsPage = () => {
  const {numberOfPages, applyPagination, currentPage } = useGetAllItems({allItemsReducer:"allBrands",getAllItemsAction:getAllBrands});
  
  return (
    <Container className="my-4">
      <BrandCardsContainer title="كل الماركات"/>
      <Pagination pageCount={numberOfPages} applyPagination={applyPagination} currentPage={currentPage} />
    </Container>
  );
};

export default BrandsPage;
