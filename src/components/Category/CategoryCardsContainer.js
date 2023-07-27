import { Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import SubTitle from "../utils/SubTitle";

const CategoryCardsContainer = ({title,btnTitle,btnPath}) => {
  return (
      <div>
        <SubTitle title={title} btnTitle={btnTitle} btnPath={btnPath} />
        <Row>
          <CategoryCard title="ألبان" backgroundColor="green"/>
          <CategoryCard title="لحوم"/>
          <CategoryCard title="ألبان"/>
          <CategoryCard title="لحوم"/>
          <CategoryCard title="ألبان"/>
          <CategoryCard title="لحوم" backgroundColor="magenta"/>
          <CategoryCard title="ألبان"/>
          <CategoryCard title="لحوم"/>
        </Row>
      </div>
  );
}

export default CategoryCardsContainer;
