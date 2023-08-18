import { Button } from "react-bootstrap";

const ProductDetails = () => {
  return (
    <div>
      <div>
        <div className="text-secondary ">الإلكترونيات:</div>
        <div>سبس س سيسب سبيسب سبيس يسب سبيسب سيبيس سس بسي سب سب سبس</div>
        <div className="text-warning"><i className="fas fa-star"></i> 4.5</div>
      </div>

      <div className="my-4">
        <div>
          <span className="text-secondary ">الماركة: </span>
          <span className="fs-4">سامسونج</span>
        </div>
        <div className="d-flex column-gap-2">
          <div className="border p-3 rounded-circle  bg-danger"></div>
          <div className="border p-3 rounded-circle  bg-white"></div>
          <div className="border p-3 rounded-circle  bg-black"></div>
        </div>
      </div>

      <div>
        <div className="text-secondary mb-2">المواصفات:</div>
        <p>يس منتبس بسب ستبمن تيسنسب س بستي مبنيسبنتيس  يسب سيمنتب سشبنتمسش نتسش سنمتب سشبس منشسش بنتسش شنمت ش نتشب شنمتبش شمن تشسبسشبس منتسشب شش شمنت شش بسشمنت سشسب سشمنت ش شسمنت شش نتش نمت شبشنمت شبشمنت شسشبمن شبسش شنتمش شمنتسب شبنت شبنمتش بشسبنتمش ش بنمتش بنشسم بسشنمت نمتشس نتمسش نمتسشمنت سشنتب نمتسشنمت نمسشن شمنتشمنت منتب نتسمشبنمت</p>
      </div>

      <div className="d-flex column-gap-3">
        <Button className="bg-white text-black border py-2 rounded-0 ">34000 جنيه</Button>
        <Button variant="dark" className="py-2 rounded-0 ">أضف للعربة</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
