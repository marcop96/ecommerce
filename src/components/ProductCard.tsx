import { Product } from "../types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  const { product } = props; // Destructure the product prop

  return (
    <Card sx={{ width: 345, height: "100%" }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
        sx={{ height: 140, objectFit: "contain" }}
      />
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
