import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure this imports your CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Job Portal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/employer/dashboard">
                    Hire Talent
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/employee/feed">
                    Get Job Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="background-cover text-center my-5">
        <h1 className="display-4">Get Hired or Hire People for Free!</h1>
        <p className="lead">Connect with the best talent or find your dream job now!</p>
        <div className="d-flex justify-content-center mt-4">
          <Button variant="contained" color="primary" className="me-3">
            <Link to="/employer/dashboard" className="text-white text-decoration-none">
              Hire Talent
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/employee/feed" className="text-white text-decoration-none">
              Get Job Now
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Job Portal | Seyha. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
