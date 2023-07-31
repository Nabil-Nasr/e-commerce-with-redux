import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/utils/Footer";
import NavBarLogin from "./components/utils/NavBarLogin";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import BrandsPage from "./pages/Brands/BrandsPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage";
import CategoryHeader from "./components/Category/CategoryHeader";
import CartPage from "./pages/Cart/CartPage";
import PaymentMethodPage from "./pages/Checkout/PaymentMethodPage";
import AdminSideBar from "./components/Admin/AdminSideBar";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubcategoryPage from "./pages/Admin/AdminAddSubcategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import UserSideBar from "./components/User/UserSideBar";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoritePage from "./pages/User/UserFavoritePage";
import UserAddressesPage from "./pages/User/UserAddressesPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";



const App = () => {

  return (
    <>
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/order/payment-method" element={<PaymentMethodPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/categories" element={<CategoriesPage />} />

        {/* CategoryHeader will be a shared component in the path and the children will be an Outlet component inside of it */}
        <Route path="/products" element={<CategoryHeader/>}>
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>

        <Route path="/brands" element={<BrandsPage />} />

        <Route path="/admin" element={<AdminSideBar/>} >
          <Route index element={<Navigate to="orders" replace/>}/>

          <Route path="orders" >
            <Route index element={<AdminAllOrdersPage/>} />
            <Route path=":id" element={<AdminOrderDetailsPage/>} />
          </Route>

          <Route path="products" element={<AdminAllProductsPage/>}/>
          <Route path="add-brand" element={<AdminAddBrandPage/>}/>
          <Route path="add-category" element={<AdminAddCategoryPage/>}/>
          <Route path="add-subcategory" element={<AdminAddSubcategoryPage/>}/>
          <Route path="add-product" element={<AdminAddProductPage/>}/>
        </Route>

        <Route path="/user" element={<UserSideBar/>} >
          <Route index element={<Navigate to="orders" replace/>}/>

          <Route path="orders" element={<UserAllOrdersPage/>}/>
          <Route path="favorite" element={<UserFavoritePage/>}/>

          <Route path="addresses">
            <Route index  element={<UserAddressesPage/>}/>
            <Route path="add-address"  element={<UserAddAddressPage/>}/>
            <Route path="edit-address"  element={<UserEditAddressPage/>}/>
          </Route>

          <Route path="profile" element={<UserProfilePage/>}/>

        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
