import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import RealTimeNews from "./pages/RealTimeNews";
import AIPoweredRecommendations from "./pages/AIPoweredRecommendations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/real-time-news" element={<RealTimeNews />} />
        <Route
          path="/ai-powered-recommendations"
          element={<AIPoweredRecommendations />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
