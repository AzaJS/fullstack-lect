import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        pages: Math.ceil(action.payload.count / 6),
        products: action.payload.results,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://34.173.115.25/api/v1";

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  async function getCategories() {
    try {
      // const token
      const res = await axios(`${API}/category/list/`);
      dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
      navigate("/products");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function getProducts() {
    try {
      const res = await axios(`${API}/products/${window.location.search}`);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/products/${id}`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  let values = {
    getCategories,
    categories: state.categories,
    addProduct,
    getProducts,
    products: state.products,
    pages: state.pages,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
