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
  const { getCategories, categories, addProduct } = useProducts();

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
    if (e.target.name === "image") {
      setProduct({
        ...product,
        // чтобы отправить картинку используют e.target.files (FileList)
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSave() {
    let newProduct = new FormData(); // FormData для загрузки файла с компьютера
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("price", product.price);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addProduct(newProduct);
  }

  // console.log(product);

  return (
    <>
      {/* проверка на админа */}
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
          <input type="file" name="image" onChange={handleInp} />

          <FormControl fullWidth>
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              value={product.category}
              onChange={handleInp}
              labelId="select-label"
              name="category"
            >
              {categories?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            sx={{ m: 1 }}
            variant="outlined"
            fullWidth
            size="large"
            onClick={handleSave}
          >
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
