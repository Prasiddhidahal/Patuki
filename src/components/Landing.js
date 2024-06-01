import React, { useEffect } from "react";
import "../styles/Landing.css"; // Correct path to LandingPage.css
import image from "../images/image.png";
// import Footer from "../components/Footter";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Landing = () => {
  useEffect(() => {
    const handleScroll = () => {
      // const slideInElement = document.querySelector(".slide-in");
      // const slideInAt =
      //   window.scrollY + window.innerHeight - slideInElement.clientHeight / 2;
      // const isHalfShown = slideInAt > slideInElement.offsetTop;
      // if (isHalfShown) {
      //   slideInElement.classList.add("visible");
      // } else {
      //   slideInElement.classList.remove("visible");
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="landing-page">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia"
        ></link>
        <div className="text">
          <h1>Discover Handmade Wonders:</h1>
          <p>
            Unleash the Artistry of Homemade Treasures: Explore Our Vibrant
            Collection of Unique Products Crafted with Love and Passion
          </p>
          <div>
            <button className="me" type="button">
              <Link to="/shop">Shop</Link>
            </button>
          </div>
        </div>

        <div className="image">
          <img src={image} alt="handmade" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
