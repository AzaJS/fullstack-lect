import React from "react";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/authContext";
import ProductContextProvider from "./contexts/productsContext";
import Routing from "./Routing";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <Routing />
        </ProductContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
