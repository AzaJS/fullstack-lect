import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return oneProduct ? (
    <>
      <h2>{oneProduct.title}</h2>
      <h2>{oneProduct.description}</h2>
      <h2>{oneProduct.price}</h2>
      <h2>{oneProduct.category.title}</h2>
      {oneProduct.image ? (
        <img src={oneProduct.image} width="250" height="250" alt="" />
      ) : (
        <h6>No images here</h6>
      )}
      <br />

      <h5>Reviews:</h5>
      {oneProduct.reviews.map((item) => (
        <div key={item.id}>
          <span>
            {item.text} {item.author}
          </span>
          {item.is_author ? <button>Delete</button> : null}
        </div>
      ))}
      <input type="text" name="" id="" />
    </>
  ) : (
    <>
      <CircularProgress />
    </>
  );
};

export default ProductDetails;
