import React, { useState, useEffect } from "react";
import "../Styles/Category.css";

const API_KEY = "2119301bc4174631b7b4af97a5ab9d4f";
const url = "https://newsapi.org/v2/everything?q=";

const Category = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch general news by default on load
    fetchNews("latest");
  }, []);

  const fetchNews = async (searchQuery) => {
    try {
      const res = await fetch(`${url}${searchQuery}&apiKey=${API_KEY}`);
      const data = await res.json();

      if (data.status !== "ok") {
        setError("Failed to load news. Try again later.");
        setArticles([]);
        return;
      }

      const filteredArticles = data.articles.filter(
        (article) => article.title && article.description && article.urlToImage
      );
      setArticles(filteredArticles);
      setError("");
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setError("Network error. Please try again later.");
      setArticles([]);
    }
  };

  const handleSearch = () => {
    if (query) {
      fetchNews(query);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="container flex-center">
      <div className="marquee-container">
        <h2>GET THE LATEST NEWS HERE!</h2>
      </div>
      <div className="search-bar flex">
        <input
          type="text"
          className="news-input"
          placeholder="e.g. Technology, Sports, World"
          value={query}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <main>
        <div className="grid-container container">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

// NewsCard Component
const NewsCard = ({ article }) => {
  const { urlToImage, title, source, publishedAt, description, url } = article;

  const formattedDate = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <div className="card" onClick={() => window.open(url, "_blank")}>
      <div className="card-header">
        <img
          src={urlToImage || "https://via.placeholder.com/400x200"}
          alt="news"
        />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <h6 className="news-source">
          {source.name} · {formattedDate}
        </h6>
        <p className="news-desc">{description}</p>
      </div>
    </div>
  );
};

export default Category;
