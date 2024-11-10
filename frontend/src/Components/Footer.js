// src/Footer.js
import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-sm mb-4">
          <p>
            &copy; {new Date().getFullYear()} Jayanesh@Tech. All rights
            reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/jayanesh2494/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/imjayanesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>

          {/* Twitter Link (formerly X) */}
          <a
            href="https://x.com/jayanesh32145"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
