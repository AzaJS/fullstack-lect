import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useProducts } from "../../contexts/productsContext";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const { deleteProduct, toggleLike } = useProducts();
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.image} alt={item.title} />
      <CardContent onClick={() => navigate(`/products/${item.id}`)}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="error">
          {item.author}
        </Typography>
      </CardContent>
      <CardActions>
        {item.author == user ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button>
          </>
        ) : null}
        <FavoriteBorderIcon
          onClick={() => {
            toggleLike(item.id);
          }}
        />
        {item.likes}
        {/* {isLiked ? (
          <>
            <FavoriteIcon
              onClick={() => {
                toggleLike(item.id);
                setIsLiked(false);
              }}
            />
          </>
        ) : (
          <>
            <FavoriteBorderIcon
              onClick={() => {
                toggleLike(item.id);
                setIsLiked(true);
              }}
            />
          </>
        )} */}
        {/* когда починят бэк лучше использовать эту запись */}
        {/* {item.liked_by_user ? <>
            <FavoriteIcon
              onClick={() => {
                toggleLike(item.id);
                setIsLiked(false);
              }}
            />
          </>
        ) : (
          <>
            <FavoriteBorderIcon
              onClick={() => {
                toggleLike(item.id);
                setIsLiked(true);
              }}
            />
          </>} */}
      </CardActions>
    </Card>
  );
}
