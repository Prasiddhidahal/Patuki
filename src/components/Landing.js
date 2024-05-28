import React from "react";
import "../styles/Landing.css"; // Correct path to LandingPage.css
// import Navbar from "../components/Navbar.js";
// import Footter from "../components/Footter.js";
import image from "../images/image.png";
const Landing = () => {
  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sofia"
      ></link>
      {/* <Navbar /> */}
      <div className="text">
        ;<h1>Discover Handmade Wonders:</h1>
        <p>
          Unleash the Artistry of Homemade Treasures: Explore Our Vibrant
          Collection of Unique Products Crafted with Love and Passion
        </p>
        <div className="button">
          <button>Shop Now</button>
        </div>
      </div>

      <div className="image">
        <img src={image} alt="handmade" />
      </div>

      {/* <Footter /> */}
      {/* <div className="more">
        <h1>
          Embrace the Beauty of Homemade: Discover Artisanal Creations That
          Celebrate the{" "}
        </h1>
      </div> */}
    </div>
  );
};

export default Landing;
