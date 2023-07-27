import { Container } from "react-bootstrap";
import Slider from "../../components/Home/Slider";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandCardsContainer from "../../components/Brand/BrandCardsContainer";
import CategoryCardsContainer from "../../components/Category/CategoryCardsContainer";


const HomePage = () => {
  return (
    <>
      <Slider />
      <Container className="d-flex flex-column row-gap-5 my-5">
        <CategoryCardsContainer title="التصنيفات" btnTitle="المزيد" btnPath="/categories" />
        <ProductCardsContainer btnTitle="المزيد" title="الأكثر مبيعا" btnPath="/products" />
      </Container>
      <Container fluid>
        <DiscountSection />
      </Container>
      <Container className="d-flex flex-column row-gap-5 my-5">
        <ProductCardsContainer btnTitle="المزيد" title="أحدث الأزياء" btnPath="/products" />
        <BrandCardsContainer btnPath="/brands" btnTitle="المزيد" title="أشهر الماركات" />
      </Container>
    </>
  );
};

export default HomePage;
