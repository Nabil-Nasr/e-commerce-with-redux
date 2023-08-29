import { Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../utils/SubTitle";
import { useSelector } from "react-redux";
import ResultsWrapper from "../utils/ResultsWrapper";


const BrandCardsContainer = ({ title, btnTitle, btnPath }) => {
  const { itemsData: brands, loading, error } = useSelector(({ brand }) => brand);

  return (
    <div>
      <SubTitle btnTitle={btnTitle} title={title} btnPath={btnPath} />
      <Row className="px-1">
        <ResultsWrapper loading={loading} items={brands} error={error}>
          {
            brands.map(brand =>
              <BrandCard
                key={brand._id}
                title={brand.name}
                imgSrc={brand.image}
              />)
          }
        </ResultsWrapper>
      </Row>
    </div>
  );
};

export default BrandCardsContainer;
