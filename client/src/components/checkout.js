import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Backdrop,
  Modal,
  Fade,
  IconButton,
  Divider,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { removeItem } from "../redux/slices/cartslice";
import { useDispatch } from "react-redux";
import { Remove, Add } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart);
  // const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    // Check if all required fields in shippingAddress and paymentMethod are filled
    const isShippingAddressValid = Object.values(shippingAddress).every(
      (field) => field !== ""
    );
    const isPaymentMethodValid = Object.values(paymentMethod).every(
      (field) => field !== ""
    );

    // Open the modal only if both shippingAddress and paymentMethod are valid
    if (isShippingAddressValid && isPaymentMethodValid) {
      setOpen(true);
    } else {
      // Display an error message or handle the invalid form case
      console.log("Form is not filled correctly");
    }
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

  const dispatch = useDispatch();

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod((prevMethod) => ({
      ...prevMethod,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation and submit the form

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: shippingAddress.email,
          cartItems: cartItems,
        }),
      });

      if (response.ok) {
        // Email sent successfully
        setOpen(true);
      } else {
        // Handle error response
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="checkout-main">
      <Box maxWidth={1200} margin="0 auto" p={4} sx={{ marginTop: "70px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" mb={4}>
                  Shipping Address
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      name="firstName"
                      value={shippingAddress.firstName}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      name="lastName"
                      value={shippingAddress.lastName}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      name="address"
                      value={shippingAddress.address}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Postal Code"
                      variant="outlined"
                      fullWidth
                      name="postalCode"
                      value={shippingAddress.postalCode}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      value={shippingAddress.email}
                      onChange={handleShippingAddressChange}
                      required
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      name="phone"
                      value={shippingAddress.phone}
                      onChange={handleShippingAddressChange}
                      required
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Box height={16} />
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" mb={4}>
                  Payment Method
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Cardholder Name"
                      variant="outlined"
                      fullWidth
                      name="cardholderName"
                      value={paymentMethod.cardholderName}
                      onChange={handlePaymentMethodChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Card Number"
                      variant="outlined"
                      fullWidth
                      name="cardNumber"
                      value={paymentMethod.cardNumber}
                      onChange={handlePaymentMethodChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Expiration Date"
                      variant="outlined"
                      fullWidth
                      name="expirationDate"
                      value={paymentMethod.expirationDate}
                      onChange={handlePaymentMethodChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      name="cvv"
                      value={paymentMethod.cvv}
                      onChange={handlePaymentMethodChange}
                      required
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" mb={4}>
                  Order Summary
                </Typography>
                <Grid container spacing={2}>
                  {cartItems.map((item) => (
                    <Grid item xs={12} key={item.id}>
                      <Box display="flex" alignItems="center">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: 80, marginRight: 16 }}
                        />
                        <Typography>
                          {item.title} -
                          <span
                            className=" p-1 m-2"
                            style={{
                              backgroundColor: "#1976D2",
                              fontSize: "15px",
                              color: "white",
                              borderRadius: 3,
                            }}
                          >
                            {item.quantity}
                          </span>
                        </Typography>
                        {/* <IconButton
                          size="small"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Remove />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton size="small">
                          <Add />
                        </IconButton> */}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Divider sx={{ my: 3 }} />
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Subtotal</Typography>
                  <Typography variant="subtitle1">₹ {total}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Shipping</Typography>
                  <Typography variant="subtitle1">₹ 60.00</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">₹ {total + 60}</Typography>
                </Box>
                <Box height={16} />

                {/* ------------------------------------ */}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleOpen}
                >
                  Place Order
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Order Placed Successfully! 🎉
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        Thank you for your order! We're processing it and will
                        notify you once it ships. <hr />
                        Item(s) Ordered: {quantity} <br />
                        Total Price: ₹ {total + 60} (Shipping included)
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default CheckoutPage;
