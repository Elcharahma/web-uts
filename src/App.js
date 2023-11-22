import React from "react";
import Home from "./Components/Home";
import Navbarmain from "./Components/Navbarmain";
import About from "./Components/About";
import Galeri from "./Components/Galeri";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbarmain />  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
