import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { useProducts } from "../../contexts/productsContext";

const AddProduct = () => {
  const { user } = useAuth();
  const { getCategories } = useProducts();

  useEffect(() => {
    getCategories();
  }, []);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleInp = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  console.log(product);

  return (
    <>
      {user == "azretmakers@gmail.com" ? (
        <Box
          sx={{
            width: "40vw",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Add new product</Typography>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="title"
            value={product.title}
            onChange={handleInp}
          />
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="description"
            value={product.description}
            onChange={handleInp}
          />
          <TextField
            label="Price"
            fullWidth
            variant="outlined"
            sx={{ m: 1 }}
            name="price"
            value={product.price}
            onChange={handleInp}
          />
          <FormControl fullWidth>
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              value={product.category}
              onChange={handleInp}
              labelId="select-label"
              name="category"
            >
              <MenuItem value={10}>ten</MenuItem>
              <MenuItem value={20}>twenty</MenuItem>
              <MenuItem value={30}>thirty</MenuItem>
            </Select>
          </FormControl>
          <Button sx={{ m: 1 }} variant="outlined" fullWidth size="large">
            Add product
          </Button>
        </Box>
      ) : (
        <>You are not admin!</>
      )}
    </>
  );
};

export default AddProduct;
