import { Row } from "react-bootstrap";
import ProductCard from "../Product/ProductCard/ProductCard";

const AdminProductCardsContainer = () => {
  const subElement = (
    <div className="d-flex justify-content-between p-2 text-secondary ">
          <span>إزالة</span>
          <span>تعديل</span>
    </div>
  )
  return (
    <div>
      <Row className="row-gap-3">
        <ProductCard subElement={subElement} title="بطيخ سوداني من سوريا ولبنان واسيوط بلد ا" price="99" vote="3.9"/>
        <ProductCard subElement={subElement} title="this is my home" price="99" vote="3.9"/>
        <ProductCard subElement={subElement} title="this is my home" price="99" vote="3.9"/>
        <ProductCard subElement={subElement} title="this is my home" price="99" vote="3.9"/>
        <ProductCard subElement={subElement} title="this is my home" price="99" vote="3.9"/>
        <ProductCard subElement={subElement} title="this is my home" price="99" vote="3.9"/>
      </Row>
    </div>
  );
}

export default AdminProductCardsContainer;
