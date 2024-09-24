import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "20px", padding: "10px 0", textAlign: "center", backgroundColor: "#f1f1f1" }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} 2024 Job Portal | Seyha. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
