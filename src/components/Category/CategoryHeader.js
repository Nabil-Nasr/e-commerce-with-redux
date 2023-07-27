import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const CategoryHeader = () => {
  return (
    <>
      <header className="bg-white text-dark-emphasis  ">
        <Container className="d-flex py-3 row-gap-2 column-gap-3 flex-wrap">
          <div>الكل</div>
          <div>إلكترونيات</div>
          <div>ملابس</div>
          <div>كهربية</div>
          <div>سوبرماركت</div>
          <div>بقالة</div>
          <div>تخفيضات</div>
          <div>المزيد ...</div>
        </Container>
      </header>
      {/* Outlet is for the child routes rendering*/}
      <Outlet/>
    </>
  );
};

export default CategoryHeader;
