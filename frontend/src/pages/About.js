import React, { useEffect, useState } from "react";
import "../Styles/About.css"; // Optional: Add custom styling here if needed

function About() {
  const [articles, setArticles] = useState([]);

  // Reuse the fetchNews function to get news related to "Agriculture"
  useEffect(() => {
    async function fetchNews() {
      const API_KEY = PROCESS.ENV.API_KEY;
      const url = `https://newsapi.org/v2/everything?q=Agriculture&apiKey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles.slice(0, 3)); // Display only 3 articles
    }
    fetchNews();
  }, []);

  return (
    <div className="about-container">
      <h1>About This News App</h1>
      <p>
        Welcome to our News App! Our mission is to bring you the latest updates
        and developments in various fields, including technology, agriculture,
        business, and more. Our app provides an easy-to-navigate interface to
        keep you informed on topics of interest.
      </p>
      <p>
        This app is designed with a user-friendly interface and includes a
        comprehensive search feature, allowing you to find articles on any topic
        that matters to you. We aim to support informed decision-making by
        providing timely and accurate news articles.
      </p>

      <h2>Related News in Agriculture</h2>
      <div className="related-news-container">
        {articles.map((article, index) => (
          <div className="related-news-card" key={index}>
            <img src={article.urlToImage} alt="news-thumbnail" />
            <div className="related-news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
