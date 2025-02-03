import Header from "./components/Header";
import StudentPage from "./pages/StudentPage";

import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";
import SearchParamsPage from "./pages/SearchParamsPage";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./pages/ShoppingCart";
import ToDo from "./pages/ToDo";
import DisplayName from "./pages/DisplayName";
import "./style/common.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/sean" element={<StudentPage name="Sean" />} />
        <Route
          path="/student/codingon"
          element={<StudentPage name="CodingOn" />}
        />
        <Route path="/student/new" element={<SearchParamsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/displayname" element={<DisplayName />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
