import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useProducts } from "../../contexts/productsContext";
import { useAuth } from "../../contexts/authContext";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { user } = useAuth();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={item.image} alt={item.title} />
      <CardContent>
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

        <Button size="small">
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
