import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const UserInfoPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      toast.success("Sign Out Successful!");
    } catch (error) {
      toast.error("Error signing out.");
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          //   minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <Avatar
          alt="User Avatar"
          src={user ? user.photoURL : ""}
          sx={{ width: "12rem", height: "12rem", mb: "2rem" }}
        />
        <Typography variant="h4" sx={{ mb: "1rem" }}>
          {user ? user.displayName : ""}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: "2rem" }}>
          {user ? user.email : ""}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Paper>
    </Box>
  );
};

export default UserInfoPage;
