// src/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title animate-title">
          Welcome to Jayanesh@Tech News!
        </h1>
        <p className="hero-subtitle animate-fade-in">
          Your daily source for the latest news around the world.
        </p>
      </section>

      <section className="features-section">
        <h2 className="features-heading">Innovative Features</h2>
        <div className="features-grid">
          <Link to="/real-time-news" className="feature-card">
            <h3>Real-Time News</h3>
            <p>Get the latest news updates as they happen across the globe.</p>
          </Link>
          <Link to="/ai-powered-recommendations" className="feature-card">
            <h3>AI-Powered Recommendations</h3>
            <p>
              Discover news tailored to your interests with AI-driven
              suggestions.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
