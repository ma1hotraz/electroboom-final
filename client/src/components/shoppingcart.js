import React from "react";
import "./styles/shoppingcart.css";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { removeItem, updateQuantity } from "../redux/slices/cartslice";
import { Add, Delete, Remove } from "@mui/icons-material";

function ShoppingCartDemo() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: 1 }));
  };

  const handleDecrement = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: -1 }));
  };

  const calculateTotal = () => {
    let total = 0;
    let quantity = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
      quantity += item.quantity;
    });
    return { total, quantity };
  };

  const { total, quantity } = calculateTotal();

  return (
    <div
      className="container  cart-container py-5 h-100"
      style={{ marginTop: "60px" }}
    >
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2">
            <div className="card-body p-0">
              <div className="row g-0">
                <div
                  className="col-lg-8"
                  style={{
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: 800,
                      margin: "0 auto",
                    }}
                  >
                    {cartItems.length === 0 ? (
                      <div className="text-center">
                        <img
                          src="images/empty.png" // Replace with your empty cart image source
                          alt="Empty Cart"
                          style={{ width: "100%" }}
                        />
                        {/* <Typography variant="subtitle1" mt={2}>
                          Your cart is empty.
          
          </Typography> */}
                      </div>
                    ) : (
                      <TableContainer component={Paper}>
                        <Typography variant="h4" align="center" mt={4} mb={4}>
                          Shopping Cart
                        </Typography>
                        <Table>
                          <TableHead sx={{ backgroundColor: "primary.main" }}>
                            <TableRow>
                              <TableCell
                                sx={{
                                  color: "common.white",
                                }}
                              >
                                Image
                              </TableCell>
                              <TableCell sx={{ color: "common.white" }}>
                                Title
                              </TableCell>
                              <TableCell sx={{ color: "common.white" }}>
                                Price
                              </TableCell>
                              <TableCell
                                sx={{
                                  color: "common.white",
                                  display: { xs: "none" },
                                }}
                              >
                                Quantity
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {cartItems.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  <img
                                    className="proimg"
                                    src={item.image}
                                    alt={item.title}
                                    style={{ maxWidth: "100px" }}
                                  />
                                </TableCell>
                                <TableCell>
                                  <Typography variant="subtitle1">
                                    {item.title}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography variant="subtitle1">
                                    ₹ {item.price * item.quantity}
                                  </Typography>
                                </TableCell>
                                <TableCell
                                  sx={{
                                    color: "common.white",
                                    display: { xs: "none" },
                                  }}
                                >
                                  <div className="quantity-container">
                                    <Button
                                      className="quantity-button"
                                      variant="outlined"
                                      color="primary"
                                      size="small"
                                      onClick={() => handleDecrement(item.id)}
                                      disabled={item.quantity <= 1}
                                    >
                                      <Remove />
                                    </Button>
                                    <Typography
                                      variant="subtitle1"
                                      className="quantity"
                                    >
                                      {item.quantity}
                                    </Typography>
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      size="small"
                                      onClick={() => handleIncrement(item.id)}
                                    >
                                      <Add />
                                    </Button>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Delete
                                    color="error"
                                    onClick={() => handleRemoveItem(item.id)}
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </Box>
                </div>
                <div
                  className="col-lg-4"
                  style={{ backgroundColor: "lightgrey" }}
                >
                  <div className="p-5">
                    <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">
                        Quantity -
                        <span
                          className=" p-1 m-2"
                          style={{
                            backgroundColor: "#1976D2",
                            color: "white",
                            borderRadius: 3,
                          }}
                        >
                          {quantity}
                        </span>
                      </h5>
                      <h5>₹ {total}</h5>
                    </div>

                    <h5 className="text-uppercase mb-3">Shipping</h5>

                    <div className="mb-4 pb-2">
                      <select className="select">
                        <option value="1">Standard-Delivery- ₹ 60.00</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>

                    <h5 className="text-uppercase mb-3">Give code</h5>

                    <div className="mb-5">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Examplea2"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Examplea2">
                          Enter your code
                        </label>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <h5 className="text-uppercase">Total price</h5>
                      <h5>₹ {total + 60}</h5>
                    </div>

                    <Link to="/checkout">
                      <button
                        type="button"
                        className="btn  btn-block btn-lg"
                        style={{
                          backgroundColor: "#1976D2",
                          color: "white",
                          borderRadius: 3,
                        }}
                        data-mdb-ripple-color="dark"
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartDemo;
