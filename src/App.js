import React from "react";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routing />
      </AuthContextProvider>
    </div>
  );
};

export default App;
