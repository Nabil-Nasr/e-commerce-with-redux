import { Container } from "react-bootstrap";
import Slider from "../../components/Home/Slider";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";
import useGetItemsWithParams from "../../hooks/useGetItemsWithParams";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllProducts } from "../../redux/actions/productActions";
import { getAllBrands } from "../../redux/actions/brandActions";

const HomePage = () => {
  useGetItemsWithParams({ getAllItems: getAllCategories, params: { limit: 6, fields: "name,image" } });

  const productsLimit = 6;
  const productsFields = "title,price,priceAfterDiscount,imageCover,ratingsAverage,ratingsQuantity";
  const { payload: mostSoldPayload } = useGetItemsWithParams({
    getAllItems: getAllProducts, params: {
      limit: productsLimit,
      // sort depend on highest sold then highest quantity
      fields: productsFields, sort: "-sold,-quantity"
    }, returnPayload: true
  });

  const { payload: highestRatePayload } = useGetItemsWithParams({ getAllItems: getAllProducts, params: { limit: productsLimit, fields: productsFields, sort: "-ratingsAverage,-ratingsQuantity" }, returnPayload: true });

  useGetItemsWithParams({ getAllItems: getAllBrands, params: { limit: 6, fields: "name,image" } });
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
        <ProductCardsContainer btnTitle="المزيد" title="أرقي المنتجات" btnPath="/products" payload={highestRatePayload} />
        <BrandCardsContainer btnPath="/brands" btnTitle="المزيد" title="أشهر الماركات" />
      </Container>
    </>
  );
};

export default HomePage;
