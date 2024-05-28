// src/components/App.js
import React from "react";
import Landing from "./Landing.js"; // Correct path to Landing.js
import Navbar from "./Navbar.js"; // Correct path to Navbar.js
import About from "./About.js"; // Correct path to About.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact.js";
import "../styles/App.css";
import Footer from "./Footter.js";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />{" "}
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />{" "}
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
