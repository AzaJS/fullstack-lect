import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.173.115.25/api/v1/account/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}register/`, formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  let values = {
    register,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
