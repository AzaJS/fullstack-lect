import { Box, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/productsContext";

const ProductsList = () => {
  const { getProducts, products, pages } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  //   перерыв до 11:47
  console.log(pages);

  return (
    <div>
      <Box>
        Products List
        {products.map((item) => (
          <p>{item.title}</p>
        ))}
      </Box>
      <Box>
        <Pagination variant="outlined" color="primary" count={5} page={1} />
      </Box>
    </div>
  );
};

export default ProductsList;
