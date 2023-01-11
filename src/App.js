import React from "react";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
};

export default App;
