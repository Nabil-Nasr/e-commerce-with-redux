import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import SubTitle from "../utils/SubTitle";
import imgg from '../../assets/images/logo.png'


const ProductCardsContainer = ({btnTitle,btnPath,title}) => {
  return (
    <div>
      <SubTitle btnTitle={btnTitle} btnPath={btnPath} title={title}/>
      <Row className="row-gap-3 px-1">
        <ProductCard title="بطيخ سوداني من سوريا ولبنان واسيوط بلد ا" price="99" vote="3.9" imgSrc={imgg}/>
        <ProductCard title="بطيخ سوداني من سوريا ولبنان واسيوط بلد ا" price="99" vote="3.9" imgSrc={imgg}/>
        <ProductCard title="this is my home" price="99" vote="3.9"/>
        <ProductCard title="this is my home" price="99" vote="3.9"/>
        <ProductCard title="بطيخ سوداني من سوريا ولبنان واسيوط بلد ا" price="99" vote="3.9" imgSrc={imgg}/>
        <ProductCard title="this is my home" price="99" vote="3.9"/>
        <ProductCard title="this is my home" price="99" vote="3.9"/>
        <ProductCard title="this is my home" price="99" vote="3.9"/>
      </Row>
    </div>
  );
}

export default ProductCardsContainer;
