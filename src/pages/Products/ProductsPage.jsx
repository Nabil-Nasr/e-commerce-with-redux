import { Container } from "react-bootstrap";
import SearchDropdown from "../../components/utils/SearchDropdown/SearchDropdown";
import SideBarFilter from "../../components/utils/SideBarFilter/SideBarFilter";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";
import useGetAllItems from "../../hooks/useGetAllItems";
import { getAllProducts, productEnableLoading } from "../../redux/actions/productActions";
import { useSelector } from "react-redux";
import { productCardFields } from "../../utils/itemRequestQueries";

const ProductsPage = () => {
  const { applyPagination } = useGetAllItems({ getAllItems: getAllProducts, itemEnableLoading: productEnableLoading, responseFields: productCardFields });

  const payload = useSelector(({ product }) => product);

  return (
    <>
      <Container className="mb-5">
        <SearchDropdown searchResults={payload.results} />
        <SideBarFilter >
          <ProductCardsContainer payload={payload} />
          <Pagination itemReducer="product" applyPagination={applyPagination} />
        </SideBarFilter>
      </Container>
    </>
  );
};

export default ProductsPage;
