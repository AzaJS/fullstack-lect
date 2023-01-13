import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/products/AddProduct";
import ProductDetails from "./components/products/ProductDetails";
import ProductsList from "./components/products/ProductsList";
import Register from "./components/Register";
import { useAuth } from "./contexts/authContext";

const Routing = () => {
  const { user } = useAuth();
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
    </Routes>
  );
};

export default Routing;
