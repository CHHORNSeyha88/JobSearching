import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Listening Platform
        </Typography>
        <Button color="inherit" component={Link} to="/employee/feed">
          Home
        </Button>
        {/* <Button color="inherit" component={Link} to="/create">
          Create Job
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
