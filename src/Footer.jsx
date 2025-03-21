// src/Footer.jsx

import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scrolling
    });
  };

  const currentDate = new Date().toLocaleDateString(); // Get today's date in format MM/DD/YYYY

  return (
    <footer className="footer">
      <button className="back-to-top-btn" onClick={scrollToTop}>
        Back to Top
      </button>
      <div className="footer-info">
        <p><strong>Class:</strong> REL C 225-012, 400: Foundations of the Restoration</p>
        <p><strong>Project:</strong> Winter 2025</p>
        <p><strong>Professor:</strong> Professor Esplin</p>
        <p><strong>Published Date:</strong> 3/21/2025</p>
        <p><strong>Author:</strong> Samuel K Richey</p>
      </div>
    </footer>
  );
};

export default Footer;
