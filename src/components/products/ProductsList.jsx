import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, products, pages } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  // следить за параметрами
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  // следить за текущей страницей и менять searchParams
  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box>
        Products List
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
      <Box>
        <Pagination
          variant="outlined"
          color="primary"
          count={pages}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
        />
      </Box>
    </div>
  );
};

export default ProductsList;
