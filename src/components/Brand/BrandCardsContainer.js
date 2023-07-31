import { Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../utils/SubTitle";

const BrandCardsContainer = ({btnTitle,btnPath,title}) => {
  return (
    <div>
      <SubTitle btnTitle={btnTitle} title={title} btnPath={btnPath} />
      <Row className="px-1">
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
      </Row>
    </div>
  );
}

export default BrandCardsContainer;
