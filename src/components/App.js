// src/components/App.js
import React from "react";
import Landing from "./Landing.js"; // Correct path to Landing.js
import Navbar from "./Navbar.js"; // Correct path to Navbar.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        <Footer />
      </div>
    </Router>
  );
};

export default App;
