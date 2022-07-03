import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Home from "../Screens/Home/Home";
import CartView from "../Screens/CartView/CartView";

const Routing = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cartview" element={<CartView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
