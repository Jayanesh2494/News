// src/RealTimeNews.js
import React, { useEffect, useState } from "react";
import "../Styles/RealTimeNews.css"; // Optional: add specific styles for this page

const RealTimeNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const API_KEY = "2119301bc4174631b7b4af97a5ab9d4f";
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        // Filter out articles with missing fields
        const validArticles =
          data.articles?.filter(
            (article) =>
              article.title && article.description && article.urlToImage
          ) || [];

        setArticles(validArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className="real-time-news-container">
      <h1>Real-Time News</h1>
      <div className="news-articles">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="news-article" key={index}>
              <img src={article.urlToImage} alt="news" />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))
        ) : (
          <p className="no-articles">
            No news articles available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default RealTimeNews;
