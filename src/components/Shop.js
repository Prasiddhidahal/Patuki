import React from "react";
import Navbar from "./Navbar";
import "../styles/Shop.css"; // Import your stylesheet here
import Shop from "../images/shop.png";
import Shopp from "../images/shopp.png";

const Shoppp = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="content">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sofia"
          ></link>
          <h1>Embrace the Beauty of Homemade Creations</h1>
          <p>
            Unleash the Artistry of Homemade Treasures: Explore Our Vibrant
            Collection of Unique Products Crafted with Love and Passion
          </p>
          <div>
            <button className="Browse" type="button">
              <a href="/Browse">Browse now</a>
            </button>
          </div>
          <div className="image-container">
            <div className="image-wrapper">
              <img src={Shop} alt="shop" />
            </div>
            <div className="image-wrapper">
              <img src={Shopp} alt="shopp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppp;
