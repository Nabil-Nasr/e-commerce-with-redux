import { Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../utils/SubTitle";
import { allBrandsEnableLoading, getAllBrands } from "../../redux/actions/brandActions";
import Loading from "../utils/Loading";
import useGetAllInitialItems from "../../hooks/useGetAllInitialItems";

const BrandCardsContainer = ({ title, btnTitle, btnPath, params }) => {
  const { data: brands, loading } = useGetAllInitialItems({ allItemsReducer: "allBrands", params, getAllItemsAction: getAllBrands, allItemsEnableLoadingAction: allBrandsEnableLoading });

  return (
    <div>
      <SubTitle btnTitle={btnTitle} title={title} btnPath={btnPath} />
      <Row className="px-1">
        {
          !loading ?
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
