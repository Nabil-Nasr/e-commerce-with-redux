import { Button, Modal, Row } from "react-bootstrap";
import ProductCard from "../Product/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productActions";
import { useState } from "react";
import ResultsWrapper from "../utils/ResultsWrapper";

const AdminProductCardsContainer = ({ remountComponent }) => {
  const { itemsData: products, loading, error } = useSelector(({ product }) => product);
  const dispatch = useDispatch();


  const [productId, setProductId] = useState("");

  const handleClose = () => setProductId("");

  const handleDelete = async () => {
    handleClose();
    const action = await dispatch(deleteProduct(productId));
    if (!action.error) remountComponent?.();
  };

  return (
    <div>
      <Row className="row-gap-3">
        <ResultsWrapper items={products} loading={loading} error={error}
          // if it wasn't because of the internet connection, then show the products
          customCondition={!(error && !navigator.onLine)}>
          {
            products.map(product =>
              <ProductCard
                key={product._id}
                id={product._id}
                title={product.title}
                imgSrc={product.imageCover}
                ratingsAverage={product.ratingsAverage}
                ratingsQuantity={product.ratingsQuantity}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
                subElement={
                  <div className="d-flex border-dark mb-2">
                    <Button
                      onClick={() => setProductId(product._id)}
                      variant="outline-danger"
                      className="border-end-0 rounded-0 px-1 flex-grow-1">إزالة</Button>
                    <Link to={`edit/${product._id}`} className="flex-grow-1">
                      <Button
                        variant="outline-success"
                        className="border-start-0 rounded-0 w-100 px-1">تعديل</Button>
                    </Link>
                  </div>}
              />)
          }
        </ResultsWrapper>
      </Row>

      <Modal show={productId} onHide={handleClose}>
        <Modal.Body >هل أنت متأكد من حذف المنتج ؟</Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            حذف المنتج
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default AdminProductCardsContainer;
