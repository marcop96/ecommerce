import { Product } from "../../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { increment } from "../../redux/cartCountSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props;
  const dispatch = useDispatch();

  function addToCartHandler(product: Product) {
    dispatch(addToCart(product));
    dispatch(increment());
  }

  return (
    <Card
      sx={{
        padding: 2,
        width: 345,
        height: "100%",
        backgroundColor: "  #fed7aa",
        boxShadow: 3,
        ":hover": { boxShadow: 10 },
      }}
    >
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
        sx={{ height: 140, objectFit: "contain" }}
      />
      <CardContent className="flex flex-col">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="h-10 overflow-scroll"
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="h-20 overflow-scroll"
        >
          {product.description}
        </Typography>
        <Typography variant="h5" color="text-secondary" className="self-center">
          $ {product.price}
        </Typography>
      </CardContent>
      <CardActions className="flex flex-row justify-end">
        <button className="self-end" onClick={() => addToCartHandler(product)}>
          Add To Cart
        </button>
      </CardActions>
    </Card>
  );
}
