import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  AppBar,
  Box,
  Button,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  Settings,
  Logout,
  AccountCircle,
  Home,
  LocalMall,
  LocalOffer,
} from "@mui/icons-material";
import { auth } from "../context/firebase";
import firebase from "firebase/compat/app";

const drawerWidth = 240;
const navItems = [
  {
    label: (
      <Button variant="text" startIcon={<Home />} sx={{ color: "white" }}>
        Home
      </Button>
    ),
    path: "/",
  },
  {
    label: (
      <Button variant="text" startIcon={<LocalOffer />} sx={{ color: "white" }}>
        Offers
      </Button>
    ),
    path: "/offers",
  },
  {
    label: (
      <Button variant="text" startIcon={<LocalMall />} sx={{ color: "white" }}>
        Shop
      </Button>
    ),
    path: "/Product",
  },
];

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

function Navbar(props) {
  const { window } = props;
  const items = useSelector((state) => state.cart);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignOut = async () => {
    if (!firebase.auth().currentUser) {
      toast.warning("You are not signed in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      try {
        await auth.signOut();
        toast.success("Signed Out Successfully");
      } catch (error) {
        toast.error("Error signing out: " + error.message);
      }
    }
    setAnchorEl(null);
  };

  // Account Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const drawer = (
    <Box
      className="drawer"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "60px" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="images/logo.png" className="logo-img" />
        ℮lectroβoom
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            sx={{ justifyContent: "center" }}
            key={item.label}
            disablePadding
          >
            <Link
              style={{
                color: "black",
                textDecoration: "inherit",
                textAlign: "center",
              }}
              to={item.path}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }} key={"cart"} disablePadding>
          <Link
            style={{
              color: "black",

              textDecoration: "inherit",
              textAlign: "center",
            }}
            to={"/shoppingcart"}
          ></Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          bgcolor: "black",
          zIndex: 9999,
          position: "fixed",
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <ThemeProvider theme={theme}>
            <img src="images/logo.png" className="logo-img" />

            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                fontSize: { md: "28px" },
                fontWeight: 700,
                letterSpacing: ".05rem",
                color: "inherit",
                textDecoration: "none",
                display: { xs: "", sm: "block" },
              }}
            >
              ℮lectroβoom
            </Typography>

            <Button key={"cart.label"} disablePadding>
              <Link style={{ color: "white" }} to={"/shoppingcart"}>
                {
                  <Button
                    variant="text"
                    sx={{
                      display: { md: "none", sm: "none", lg: "none" },
                      paddingLeft: "50px",
                    }}
                    startIcon={
                      <Badge badgeContent={items.length} color="primary">
                        <ShoppingCartIcon sx={{ color: "white" }} />
                      </Badge>
                    }
                  ></Button>
                }
              </Link>
            </Button>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{
                  display: { md: "none", sm: "none", lg: "none" },
                }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {currentUser ? (
                  <Avatar
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                    sx={{ width: 32, height: 32 }}
                  />
                ) : (
                  <Avatar sx={{ width: 32, height: 32 }} />
                )}
              </IconButton>
            </Tooltip>
          </ThemeProvider>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className="navv" key={item.label} disablePadding>
                <Link className="aa" to={item.path}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button key={"cart.label"} disablePadding>
              <Link
                sx={{
                  color: "white",
                }}
                to={"/shoppingcart"}
              >
                {
                  <Button
                    variant="text"
                    startIcon={
                      <Badge badgeContent={items.length} color="primary">
                        <ShoppingCartIcon sx={{ color: "white" }} />
                      </Badge>
                    }
                  ></Button>
                }
              </Link>
            </Button>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{}}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                {currentUser ? (
                  <Avatar
                    src={currentUser.photoURL}
                    alt={currentUser.displayName}
                    sx={{ width: 32, height: 32 }}
                  />
                ) : (
                  <Avatar sx={{ width: 32, height: 32 }} />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 2.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              disableScrollLock
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginBottom: "8px",
                }}
                to="/login"
              >
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  startIcon={<AccountCircle />}
                >
                  Login
                </Button>
              </Link>
              <MenuItem onClick={handleClose}>
                <Avatar />{" "}
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/userdetails"
                >
                  User Profile
                </Link>
              </MenuItem>

              <Divider />

              {/* {currentUser && (
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/userdetails"
                  >
                    {currentUser.displayName}
                  </Link>
                </MenuItem>
              )} */}
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleSignOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <ToastContainer position="bottom-right" style={{ bottom: "0px" }} />
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
