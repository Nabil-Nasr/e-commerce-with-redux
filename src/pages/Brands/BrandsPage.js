import { Container } from "react-bootstrap";
import Pagination from "../../components/utils/Pagination/Pagination";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";

const BrandsPage = () => {
  return (
    <>
      <Container className="my-4">
        <BrandCardsContainer title="كل الماركات"/>
        <Pagination pageCount={40} applyPagination={()=>{}} currentPage={0}/>
      </Container>
    </>
  );
}

export default BrandsPage;
