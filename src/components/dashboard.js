import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <div className="row">
        <Link to="/users" className="btn btn-primary mb-2">
          Manage Users
        </Link>
        <Link to="/products" className="btn btn-primary mb-2">
          View Products
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
