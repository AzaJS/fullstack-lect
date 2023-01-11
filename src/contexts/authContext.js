import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.173.115.25/api/v1/account/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}register/`, formData);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(Object.values(error.response.data).flat(2));
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const login = async (formData, email) => {
    try {
      const res = await axios.post(`${API}login/`, formData);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
    } catch (error) {
      console.log(error.response.data.detail);
      setError(error.response.data.detail);
    }
  };

  let values = {
    register,
    error,
    setError,
    login,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
