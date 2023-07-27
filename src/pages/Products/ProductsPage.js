import { Container } from "react-bootstrap";
import SearchDropdown from "../../components/utils/SearchDropdown/SearchDropdown";
import SideBarFilter from "../../components/utils/SideBarFilter/SideBarFilter";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";

const ProductsPage = () => {
  return (
    <>
      <Container className="mb-5">
        <SearchDropdown/>
          <SideBarFilter>
            <ProductCardsContainer/>
            <Pagination pageCount={3333}/>
          </SideBarFilter>
      </Container>
    </>
  );
};

export default ProductsPage;
