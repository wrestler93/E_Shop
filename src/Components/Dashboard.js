import React from "react";
import "./Dashboard.css";
import Product from "./Product";

const Dashboard = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg"
            className="home_image"
            alt=""
          />
          <div className="home_row">
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
