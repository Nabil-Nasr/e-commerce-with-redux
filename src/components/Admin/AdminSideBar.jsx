import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBarLink from "../utils/SideBarLink";

const AdminSideBar = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col sm="4" md="3" xl="2" className="px-0">
          <div className="bg-white px-3 py-4 position-sticky shadow-sm mb-4" style={{top:75}}>
            <SideBarLink to="orders">إدارة الطلبات</SideBarLink>
            <SideBarLink to="products">إدارة المنتجات</SideBarLink>
            <SideBarLink to="add-brand">إضافة ماركة</SideBarLink>
            <SideBarLink to="add-category">إضافة تصنيف</SideBarLink>
            <SideBarLink to="add-subcategory">إضافة تصنيف فرعي</SideBarLink>
            <SideBarLink to="add-product">إضافة منتج</SideBarLink>
          </div>
        </Col>
        <Col sm="8" md="9" xl="10"><Outlet/></Col>
      </Row>
    </Container>
  );
}

export default AdminSideBar;
