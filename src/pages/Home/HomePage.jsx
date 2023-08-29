import { Container } from "react-bootstrap";
import Slider from "../../components/Home/Slider";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import useGetWithParams from "../../hooks/useGetWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllProducts } from "../../redux/actions/productActions";
import { getAllBrands } from "../../redux/actions/brandActions";
import { brandCardFields, brandCardsLimit, categoryCardFields, categoryCardsLimit, productCardFields, productCardsLimit } from "../../utils/itemRequestQueries";

const HomePage = () => {
  useGetWithParams({ getAction: getAllCategories, params: { limit: categoryCardsLimit, fields: categoryCardFields } });

  const mostSoldPayload = useGetWithParams({
    getAction: getAllProducts, params: {
      limit: productCardsLimit,
      // sort depend on highest sold then highest quantity
      fields: productCardFields, sort: "-sold,-quantity"
    }, returnPayload: true
  });

  const highestRatePayload = useGetWithParams({ getAction: getAllProducts, params: { limit: productCardsLimit, fields: productCardFields, sort: "-ratingsAverage,-ratingsQuantity" }, returnPayload: true });

  useGetWithParams({ getAction: getAllBrands, params: { limit: brandCardsLimit, fields: brandCardFields } });
  return (
    <>
      <Slider />
      <Container className="d-flex flex-column row-gap-5 my-5">
        <CategoryCardsContainer title="التصنيفات" btnTitle="المزيد" btnPath="/categories" />
        <ProductCardsContainer btnTitle="المزيد" title="الأكثر مبيعا" btnPath="/products" payload={mostSoldPayload} />
      </Container>
      <Container fluid>
        <DiscountSection />
      </Container>
      <Container className="d-flex flex-column row-gap-5 my-5">
        <ProductCardsContainer btnTitle="المزيد" title="الأعلي تقييما" btnPath="/products" payload={highestRatePayload} />
        <BrandCardsContainer btnPath="/brands" btnTitle="المزيد" title="أشهر الماركات" />
      </Container>
    </>
  );
};

export default HomePage;
