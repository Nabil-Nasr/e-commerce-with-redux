import { Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../utils/SubTitle";
import Loading from "../utils/Loading";
import { useSelector } from "react-redux";


const BrandCardsContainer = ({ title, btnTitle, btnPath }) => {
  const { data: brands, loading, error } = useSelector(({ allBrands }) => allBrands);

  return (
    <div>
      <SubTitle btnTitle={btnTitle} title={title} btnPath={btnPath} />
      <Row className="px-1">
        {
          !loading && brands.length && !error ?
            brands.map(brand =>
              <BrandCard
                key={brand._id}
                title={brand.name}
                imgSrc={brand.image}
              />)
            : <Loading />
        }
      </Row>
    </div>
  );
};

export default BrandCardsContainer;
