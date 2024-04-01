import React from 'react';
import './UrlShortener.css';
import UrlShortenerButton from './UrlShortenerButton'; // Correct the import path

function UrlShortener() {
  return (
    <div className="url-shortener">
      <h1>Simple URL Shortener</h1> 
      <div>
        <input type="text" id="urlInput" placeholder="Enter your URL here" />
        <UrlShortenerButton />
      </div>
      <p id="result"></p>
    </div>
  );
}

export default UrlShortener;
