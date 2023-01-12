import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AddProduct from "./components/products/AddProduct";
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
          <Route path="/products" />
          <Route path="/add" element={<AddProduct />} />
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
