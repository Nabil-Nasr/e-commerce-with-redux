import { Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import SubTitle from "../utils/SubTitle";
import { allCategoriesEnableLoading, getAllCategories } from "../../redux/actions/categoryActions";
import Loading from "../utils/Loading";
import useGetAllInitialItems from "../../hooks/useGetAllInitialItems";

const backgroundColors = ["#FFCCBC", "#F4DBA5", "#55CFDF", "#2196F3", "#FFD3E8"];

const CategoryCardsContainer = ({ title, btnTitle, btnPath, params }) => {
  const { data: categories, loading } = useGetAllInitialItems({ allItemsReducer: "allCategories", params, getAllItemsAction: getAllCategories, allItemsEnableLoadingAction: allCategoriesEnableLoading });

  return (
    <div className="d-grid row-gap-3">
      <SubTitle title={title} btnTitle={btnTitle} btnPath={btnPath} />
      <Row>
        {
          !loading ?
            categories.map((category, index) =>
              <CategoryCard
                key={category._id}
                title={category.name}
                imgSrc={category.image}
                backgroundColor={backgroundColors[index % backgroundColors.length]}
              />)
            : <Loading />
        }
      </Row>
    </div>
  );
};

export default CategoryCardsContainer;
