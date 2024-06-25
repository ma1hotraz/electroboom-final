import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { AddShoppingCart } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartslice";
import { ColorRing } from "react-loader-spinner";

function Api() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";
    setLoader(true);
    Axios.get(URL).then((res) => {
      setProducts(res.data);
      setLoader(false);
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      {loader ? (
        <div className="api-loader">
          <ColorRing />
        </div>
      ) : (
        <div className="api">
          <div className="container ">
            <h2 className="text-center display-6 my-4">Our Products</h2>
            <Box
              className="aa"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {products.map((product) => (
                <Card
                  key={product.id}
                  sx={{
                    width: 345,
                    margin: 2,
                    padding: 4,
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {product.price} $
                    </Typography>
                  </CardContent>
                  <CardActions sx={{}}>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() => (window.location.href = product.link)}
                    >
                      Buy Now
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleAddToCart(product)}
                      variant="contained"
                      color="info"
                    >
                      <AddShoppingCart />
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </div>
        </div>
      )}
    </>
  );
}

export default Api;
