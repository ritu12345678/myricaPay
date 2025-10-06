import React, { useState } from "react";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: "100vh",       // full viewport height
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center",     // center vertically
        bgcolor: "#043E72",       // blue background
        width: "100vw"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          bgcolor: "#fff"
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight={700} color="black" gutterBottom>
          ADMIN LOGIN
        </Typography>

        {/* Username */}
        <Box sx={{ textAlign: "left", mt: 2 }}>
          <label
            htmlFor="username"
            style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
          >
            Username/Email
          </label>
          <input
            id="username"
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none"
            }}
          />
        </Box>

        {/* Password */}
        <Box sx={{ textAlign: "left", mt: 2, position: "relative" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
              paddingRight: "40px" // space for icon
            }}
          />
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            sx={{
              position: "absolute",
              right: 8,
              top: "70%",
              transform: "translateY(-50%)",
              padding: 0
            }}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={()=>navigate("/dashboard")}
          sx={{
            mt: 3,
            bgcolor: "#043C78",
            "&:hover": { bgcolor: "#043E72" }
          }}
        >
          Login
        </Button>

        {/* Footer Text */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          Secure admin access • Protected environment
        </Typography>
      </Paper>
    </Box>
  );
}
