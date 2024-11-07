import { Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home";
import NavbarComponent from "../components/navbar";
import { JewelleryScreen } from "../screens/JewelleryScreen";
import AboutScreen from "../screens/about";
import InvalidScreen from "../screens/invalidScreen";
import CategoryScreen from "../screens/category";
import { ElectronicsScreen } from "../screens/electronic";
import ProductScreen from "../screens/products";
import ProductDetailScreen from "../screens/productDetails";

const NavigationStack = () => {
  return (
    <>
      <NavbarComponent />

      {true ? (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="category" element={<CategoryScreen />}>
            <Route index element={<ElectronicsScreen />} />
            <Route path="jewellery" element={<JewelleryScreen />} />
            <Route path="electronics" element={<ElectronicsScreen />} />
          </Route>
          <Route path="products" element={<ProductScreen />} />
          <Route path="products/:productId" element={<ProductDetailScreen />} />
          <Route path="*" element={<InvalidScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<HomeScreen />} />
        </Routes>
      )}
    </>
  );
};
export default NavigationStack;
