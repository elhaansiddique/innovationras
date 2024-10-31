import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Shop from "./pages/shop";
import Furniture from "./pages/furniture";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/furniture" element={<Furniture />} />
      </Routes>
    </Router>
  );
}

export default App;
