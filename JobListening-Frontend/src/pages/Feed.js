import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";

// Function to fetch data with axios
const fetcher = (url) => axios.get(url).then((res) => res.data);

const Feed = () => {
  const [query, setQuery] = useState("");

  // Use SWR for real-time fetching
  const { data: posts, error } = useSWR(
    query.length > 2
      ? `http://localhost:8080/posts/${query}`
      : `http://localhost:8080/alljob`,
    fetcher,
    {
      refreshInterval: 5000, // Re-fetch data every 5 seconds
    }
  );

  if (error) return <div>Failed to load posts</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <Grid container spacing={3} sx={{ padding: "3%", maxWidth: "1200px", margin: "auto" }}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2%" }}>
          <Button sx={{ textTransform: "none", fontWeight: "bold", fontSize: "1rem" }} variant="contained">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          </Button>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                borderRadius: '25px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              },
            }}
            placeholder="Search jobs..."
            sx={{ width: "75%", borderRadius: '25px' }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>

      {/* Job Cards */}
      {posts &&
        posts.map((p) => (
          <Grid key={p.id} item xs={12} md={6} lg={4}>
            <Card
              sx={{
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "16px",
                }}
              >
                {p.profile}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#555",
                  marginBottom: "12px",
                }}
              >
                {p.desc}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  marginBottom: "8px",
                  fontSize: "1.1rem",
                  color: "#333",
                }}
              >
                {p.exp} Years of Experience
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#888", fontWeight: "bold", marginBottom: "8px" }}
              >
                Skills:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.techs.map((s, i) => (
                  <Box
                    key={i}
                    sx={{
                      padding: "4px 12px",
                      background: "#e0f7fa",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      color: "#00796b",
                      fontWeight: "bold",
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Feed;
