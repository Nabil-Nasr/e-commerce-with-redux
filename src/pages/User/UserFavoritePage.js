import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import Pagination from "../../components/utils/Pagination/Pagination";

const UserFavoritePage = () => {
  return (
    <div>
      <h3 className="fw-bold">المنتجات المفضلة</h3>
      <ProductCardsContainer/>
      <Pagination pageCount={43}/>
    </div>
  );
}

export default UserFavoritePage;
