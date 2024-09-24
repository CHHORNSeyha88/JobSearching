import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grow,
  Zoom,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header"; // Adjust the import path
import Footer from "./Footer"; // Adjust the import path

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  const skillSet = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "Python" },
    { name: "Django" },
    { name: "Rust" },
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/addjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/employee/feed");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const { profile, exp, desc } = form;

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      techs: prevForm.techs.includes(value)
        ? prevForm.techs.filter((tech) => tech !== value)
        : [...prevForm.techs, value],
    }));
  };

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Paper
          sx={{
            padding: "3%",
            maxWidth: "600px",
            margin: "3% auto",
            borderRadius: "12px",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9fafb",
          }}
          elevation={6}
        >
          <Zoom in timeout={600}>
            <Typography
              sx={{ marginBottom: "3%" }}
              align="center"
              variant="h5"
              fontWeight="600"
              color="primary"
            >
              Create New Job Post
            </Typography>
          </Zoom>

          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Grow in timeout={500}>
                <TextField
                  fullWidth
                  required
                  label="Job Profile"
                  variant="outlined"
                  value={profile}
                  onChange={(e) => setForm({ ...form, profile: e.target.value })}
                />
              </Grow>

              <Grow in timeout={600}>
                <TextField
                  fullWidth
                  type="number"
                  required
                  label="Years of Experience"
                  variant="outlined"
                  value={exp}
                  onChange={(e) => setForm({ ...form, exp: e.target.value })}
                />
              </Grow>

              <Grow in timeout={700}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Job Description"
                  variant="outlined"
                  value={desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                />
              </Grow>

              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <Fade in timeout={800}>
                  <FormLabel
                    component="legend"
                    sx={{ fontSize: "1.2rem", fontWeight: "500" }}
                  >
                    Required Skills
                  </FormLabel>
                </Fade>

                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "15px",
                    marginTop: "10px",
                  }}
                >
                  {skillSet.map(({ name }, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          checked={form.techs.includes(name)}
                          onChange={handleCheckboxChange}
                          value={name}
                        />
                      }
                      label={name}
                    />
                  ))}
                </FormGroup>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  padding: "10px 0",
                  width: "100%",
                  marginTop: "20px",
                  fontSize: "1rem",
                }}
              >
                Submit Post
              </Button>
            </Box>
          </form>
        </Paper>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Create;
