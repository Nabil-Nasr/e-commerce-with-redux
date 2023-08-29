import { Container } from "react-bootstrap";
import Pagination from "../../components/utils/Pagination/Pagination";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";
import useGetAllItems from "../../hooks/useGetAllItems";
import { brandEnableLoading, getAllBrands } from "../../redux/actions/brandActions";
import { brandCardFields } from "../../utils/itemRequestQueries";

const BrandsPage = () => {
  const { applyPagination } = useGetAllItems({ getAllItems: getAllBrands, itemEnableLoading: brandEnableLoading, params: { fields: brandCardFields } });

  return (
    <Container className="my-4">
      <BrandCardsContainer title="كل الماركات" />
      <Pagination itemReducer="brand" applyPagination={applyPagination} />
    </Container>
  );
};

export default BrandsPage;
