import React, { useEffect } from "react";
import "../styles/Landing.css"; // Correct path to LandingPage.css
import image from "../images/image.png";

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
        <div className="button">
          <button>Shop Now</button>
        </div>
      </div>

      <div className="image">
        <img src={image} alt="handmade" />
      </div>

      {/* <div className="more">
        <h1>
          Embrace the Beauty of Homemade: Discover Artisanal Creations That
          Celebrate the
        </h1>
        <div className="green-background">
          <h1>Explore More Handmade Creations</h1>
        </div>
        <div className="slide-in">
          <h1>New Arrivals Coming Soon</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
