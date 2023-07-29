import { Route, Routes } from "react-router-dom";
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



const App = () => {

  return (
    <>
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/categories" element={<CategoriesPage />} />

        {/* CategoryHeader will be a shared component in the path and the children will be an Outlet component inside of it */}
        <Route path="/products" element={<CategoryHeader/>}>
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>

        <Route path="/brands" element={<BrandsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
