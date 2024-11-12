// src/AIPoweredRecommendations.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/AIPoweredRecommendations.css";

const AIPoweredRecommendations = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchRecommendedNews() {
      try {
        const API_KEY = PROCESS.ENV.API_KEY;
        const url = `https://newsapi.org/v2/everything?q=AI&apiKey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        // Check if data.articles exists and filter out invalid articles
        if (data.articles && Array.isArray(data.articles)) {
          const validArticles = data.articles
            .filter(
              (article) =>
                article.title && article.description && article.urlToImage
            ) // Only include articles with title, description, and image
            .slice(0, 6); // Display the top 6 AI-recommended articles
          setArticles(validArticles);
        } else {
          console.error("No articles found in the API response.");
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      }
    }

    fetchRecommendedNews();
  }, []);

  return (
    <div className="ai-powered-recommendations">
      <motion.div
        className="recommendation-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="ai-title">AI-Powered News Recommendations</h1>
        <p className="ai-subtitle">
          Discover the latest, curated just for you by our advanced AI
          algorithms.
        </p>
      </motion.div>

      <motion.div
        className="articles-grid"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p className="no-articles">
            No recommended articles available at the moment.
          </p>
        )}
      </motion.div>
    </div>
  );
};

const NewsCard = ({ article }) => (
  <motion.div
    className="news-card"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={article.urlToImage} alt="news" className="news-image" />
    <div className="news-content">
      <h3 className="news-title">{article.title}</h3>
      <p className="news-description">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        Read More
      </a>
    </div>
  </motion.div>
);

export default AIPoweredRecommendations;
