import { Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import SubTitle from "../utils/SubTitle";
import { useSelector } from "react-redux";
import ResultsWrapper from "../utils/ResultsWrapper";

const backgroundColors = ["#FFCCBC", "#F4DBA5", "#55CFDF", "#2196F3", "#FFD3E8"];

const CategoryCardsContainer = ({ title, btnTitle, btnPath }) => {
  const { itemsData: categories, loading, error } = useSelector(({ category }) => category);

  return (
    <div className="d-grid row-gap-3">
      <SubTitle title={title} btnTitle={btnTitle} btnPath={btnPath} />
      <Row>
        <ResultsWrapper items={categories} loading={loading} error={error}>
          {
            categories.map((category, index) =>
              <CategoryCard
                key={category._id}
                title={category.name}
                imgSrc={category.image}
                backgroundColor={backgroundColors[index % backgroundColors.length]}
              />)
          }
        </ResultsWrapper>
      </Row>
    </div>
  );
};

export default CategoryCardsContainer;
