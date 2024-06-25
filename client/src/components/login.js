import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import firebase from "firebase/compat/app";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../context/firebase";
import GoogleButton from "react-google-button";
import { GithubLoginButton } from "react-social-login-buttons";
import { getAuth } from "firebase/auth";
import { GoogleLoginButton } from "react-social-login-buttons";
import { CircularProgress } from "@mui/material";

const auth1 = getAuth();
auth1.languageCode = "it";
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

function SignInSide() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Sign In");
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in with Google
        console.log("Sign in with Google successful", result.user);
        toast.success(`Welcome, ${result.user.displayName}!`);
      })
      .catch((error) => {
        // Handle sign-in with Google error
        console.error("Error signing in with Google", error);
        toast.error("Error signing in with Google", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const login = async () => {
    if (user) {
      // User is already signed in, no need to sign in again
      toast.info("You are already signed in.", { position: "bottom-right" });
      return;
    }
    setButtonLabel(
      <>
        <CircularProgress style={{ color: "white" }} size={18} sx={{ mr: 2 }} />{" "}
        Signing in...
      </>
    );
    // setButtonLabel("Signing in.." + <CircularProgress />);

    setTimeout(() => {
      setButtonLabel("Sign in");
    }, 1500);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
      toast.success("Sign In Successful!", {
        position: "bottom-right",
      });
      resetForm();
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-right" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-body">
      <ThemeProvider theme={createTheme()}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              {/* <Grid
                sx={{ mt: 2, mb: 1 }}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography component="h4" marginRight={1} variant="h6">
                    Current User: {user?.displayName}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    onClick={logout}
                    // fullWidth
                    variant="contained"
                  >
                    Sign Out
                  </Button>
                </Grid>
              </Grid> */}

              {/* <Button
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // setUser(null);
                      toast.success("Sign Out Successful!", {
                        position: "bottom-right",
                      });
                    })
                    .catch((error) => {
                      console.error("Error signing out", error);
                    });
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Out
              </Button> */}

              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={login}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {buttonLabel}
                </Button>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <GoogleButton type="light" onClick={signInWithGoogle} />
                  </Grid>

                  <Grid item>
                    <Link to="/registration" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                    <br />
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  {/* <Grid item> */}

                  {/* </Grid> */}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <ToastContainer position="bottom-right" /> */}
      </ThemeProvider>
    </div>
  );
}

export default SignInSide;
