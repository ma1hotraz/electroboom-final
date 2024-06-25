import React, { useEffect, useState } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import firebase from "firebase/compat/app";
import { toast, ToastContainer } from "react-toastify";
import "firebase/compat/auth";
import GoogleButton from "react-google-button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM7xtU2cMDIKbKaDfLkXrfqB5kGEVxth0",
  authDomain: "electroboom-44995.firebaseapp.com",
  projectId: "electroboom-44995",
  storageBucket: "electroboom-44995.appspot.com",
  messagingSenderId: "997835859524",
  appId: "1:997835859524:web:bc2bf2981ad3e7ac63fe11",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Handle successful sign-in with Google
      console.log("Sign in with Google successful", result.user);
    })
    .catch((error) => {
      // Handle sign-in with Google error
      console.error("Error signing in with Google", error);
    });
};

function SignUpSide() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      // Cleanup function to unsubscribe from the listener
      unsubscribe();
    };
  }, []);

  const register = async () => {
    try {
      if (name.trim() === "") {
        setNameError(true);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const resetForm = () => {
        setEmail("");
        setName("");
        setPassword("");
        setPassword("");
        setConfirmPassword("");
      };

      // Set the display name for the user
      await updateProfile(user, { displayName: name });
      console.log(user);
      toast.success("Sign Up Successful!", {
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

    // Reset previous error states
    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    // Validate name
    if (name.trim() === "") {
      setNameError(true);
      return;
    }

    // Rest of the form submission logic
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
                mt: 7,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              {/* <Typography component="h4" variant="h5">
                Current User: {user?.email}
              </Typography> */}

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
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError && "Name is required"}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError && "Invalid email format"}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError}
                  helperText={passwordError && "Invalid password format"}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={confirmPasswordError}
                  helperText={confirmPasswordError && "Passwords do not match"}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={register}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                {/* <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  OR
                </p> */}

                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <GoogleButton type="light" onClick={signInWithGoogle} />
                  </Grid>
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <ToastContainer position="bottom-right" style={{ bottom: "0px" }} />
    </div>
  );
}

export default SignUpSide;
