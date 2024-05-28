import React from "react";
import "../styles/About.css"; // Correct path to About.css
// import teamPhoto from "../images/team.jpg";

const About = () => {
  return (
    <div>
      <div className="landing-page">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia"
        ></link>
      </div>
      <div className="about-container">
        <h1 className="about-header">About Us</h1>
        <p className="about-text">
          Welcome to our application! We are dedicated to helping women with
          skills. Our mission is to provide a platform where artisans can
          showcase and sell their handmade products. We believe in the power of
          creativity and the importance of supporting local talent.
        </p>
        <div className="team-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate individuals committed to promoting
            and supporting handmade crafts. We work tirelessly to ensure that
            our platform provides the best experience for both sellers and
            buyers. Join us in celebrating the art of handmade creations.
          </p>
          {/* <div className="team-photo">
            <img src={teamPhoto} alt="Our Team" />
          </div> */}
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default About;
