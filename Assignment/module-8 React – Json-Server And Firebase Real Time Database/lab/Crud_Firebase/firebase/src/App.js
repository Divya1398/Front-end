// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/addProduct/AddProduct";
import UpdateProduct from "./Pages/updateproduct/UpdatedProduct";
import MyState from "./Context/Data/MyState";
// import ProductList from "./Component/ProductList";

function App() {
  return (
    <MyState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        {/* <Route path="/productlist" element={<ProductList />} /> */}
      </Routes>
    </BrowserRouter>
    </MyState>
  );
}

export default App;
