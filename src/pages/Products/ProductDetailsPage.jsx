import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";
import RatesContainer from "../../components/Rates/RatesContainer";
import ProductCardsContainer from "../../components/Product/ProductCardsContainer";
import useGetWithParams from "../../hooks/useGetWithParams";
import { getAllProducts, getProduct } from "../../redux/actions/productActions";
import { productCardFields, productCardsLimit } from "../../utils/itemRequestQueries";
import { useParams } from "react-router-dom";
import useUpdateEffect from "../../hooks/useUpdateEffect";

const ProductDetailsPage = () => {
  const { id } = useParams();

  // return payload here to not use the old product state from redux store
  const { itemData: productDetails } = useGetWithParams({ params: { id }, getAction: getProduct, returnPayload: true });
  const { imageCover, images, category } = productDetails;

  // get products from the same category
  const sameCategoryProductsPayload = useGetWithParams({ getAction: getAllProducts, params: { limit: productCardsLimit + 1, fields: productCardFields, sort: "-ratingsAverage,-ratingsQuantity", category }, useEffectHook: useUpdateEffect, returnPayload: true });

  return (
    <Container className="my-4 ">
      <Row className="row-gap-4">
        <Col lg="6" xxl="5">
          <ProductGallery items={[imageCover].concat(images)} responsive="lg" />
        </Col>
        <Col lg="6" xxl="7">
          <ProductDetails productDetails={productDetails} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RatesContainer />
        </Col>
      </Row>
      {
        // > 1 because the current product is included in the same category products array
        sameCategoryProductsPayload.itemsData.length > 1 &&
        <Row>
          <Col>
            <ProductCardsContainer
              title="قد تعجبك"
              payload={
                {
                  ...sameCategoryProductsPayload,
                  // remove the current product from the same category products array
                  itemsData: sameCategoryProductsPayload.itemsData.filter(product => product._id !== productDetails._id)
                }
              }
            />
          </Col>
        </Row>
      }
    </Container>
  );
};

export default ProductDetailsPage;
