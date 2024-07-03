// src/components/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Shop from "./Shop.js";
import Browse from "./Browse.js";
import Footer from "./Footter.js";

import "../styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
