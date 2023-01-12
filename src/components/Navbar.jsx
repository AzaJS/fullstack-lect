import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const { user, checkAuth, logout } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  console.log(user);

  const buttonsStyle = {
    color: "white",
    display: "block",
    textTransform: "capitalize",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user ? (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Button sx={buttonsStyle} onClick={() => navigate("/products")}>
                  Products
                </Button>
                <Button sx={buttonsStyle} onClick={() => navigate("/add")}>
                  Admin
                </Button>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ alignSelf: "center" }}>{user}</Typography>
                <Button sx={buttonsStyle} onClick={logout}>
                  Logout
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Button sx={buttonsStyle} onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button sx={buttonsStyle} onClick={() => navigate("/register")}>
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
