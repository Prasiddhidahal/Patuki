import React from "react";
import Img from "../images/Browse.png";
import Navbar from "./Navbar";
import "../styles/Browse.css";
import Image from "../images/Browse2.png";
import NewImage from "../images/Browse3.png"; // Adjust the import path accordingly
import Browse4 from "../images/Browse4.png";
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="browse-container">
        <div className="browse-content">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sofia"
          />
          <div className="image-row">
            <div className="browse-image">
              <img src={Image} alt="browse1" />
            </div>
            <div className="Written">
              <h1>Handmade Treasures: Uniquely Crafted</h1>
              <p>
                Discover the Beauty of Homemade: Elevate Your Lifestyle with
                Artisanal Creations That Celebrate the Art of Craftsmanship.
              </p>
              <button className="Shop" type="button">
                <a href="/Shop">Shop Now</a>
              </button>
            </div>
            <div className="browse-image">
              <img src={Img} alt="browse2" />
            </div>
          </div>
          <div className="image-row">
            <div className="browse-image">
              <img className="small-image" src={NewImage} alt="browse3" />
            </div>
            <div className="browse-image">
              <img className="browse4" src={Browse4} alt="browse4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
