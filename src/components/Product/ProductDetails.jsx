import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import useGetWithParams from "../../hooks/useGetWithParams";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { getCategory } from "../../redux/actions/categoryActions";
import { getBrand } from "../../redux/actions/brandActions";

const ProductDetails = ({ productDetails }) => {
  const { title, quantity, ratingsAverage, ratingsQuantity, description, price, priceAfterDiscount, availableColors = [], category: categoryId, brand: brandId, subcategory: subCategoryIds } = productDetails;

  useGetWithParams({ params: { id: categoryId }, getAction: getCategory, useEffectHook: useUpdateEffect });

  useGetWithParams({ params: { id: brandId }, getAction: getBrand, useEffectHook: useUpdateEffect });


  const { itemData: { name: category } } = useSelector(({ category }) => category);

  const { itemData: { name: brand } } = useSelector(({ brand }) => brand);

  return (
    <div>
      <div>
        <div className="text-secondary fs-5">{category} :</div>
        <h2>{title}</h2>
        <div className="d-flex gap-1">
          <div className="text-warning"><i className="fas fa-star"></i> {ratingsAverage || 0}</div>
          <div>({ratingsQuantity})</div>
        </div>
      </div>

      <div className="d-flex column-gap-1 align-items-center">
        <span className="text-secondary fs-5">الكمية المتاحة :</span>
        <span className="fs-4">{quantity}</span>
      </div>

      <div className="my-4">
        {
          brand &&
          <div>
            <span className="text-secondary fs-5">الماركة : </span>
            <span className="fs-4">{brand}</span>
          </div>
        }
        {
          availableColors.length > 0 &&
          <div className="d-flex column-gap-2">
            {availableColors.map((color, index) => (
              <div key={index} className="border p-3 rounded-circle" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        }
      </div>

      <div>
        <div className="text-secondary fs-5 mb-2">المواصفات :</div>
        <p>{description}</p>
      </div>

      <div className="d-flex column-gap-3 align-items-center">
        {
          priceAfterDiscount ? (
            <>
              <div className="text-decoration-line-through text-secondary">{price} جنيه</div>
              <span className="bg-white text-black border px-3 py-2 rounded-0 ">{priceAfterDiscount} جنيه</span>
            </>
          )
            : <Button className="bg-white text-black border py-2 rounded-0 ">{price} جنيه</Button>
        }
        <Button variant="dark" className="px-3 py-2 rounded-0 ">أضف للعربة</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
