import React, { useState } from 'react';

function UrlShortenerButton() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShortenUrl = () => {
    const urlInput = document.getElementById('urlInput').value.trim(); // Get the input value
    if (!urlInput) {
      console.error('Please enter a valid URL.');
      return;
    }

    fetch('https://quiet-reef-21453-76e7ef99e759.herokuapp.com/shorten', { // Updated backend endpoint URL
      method: 'POST', // Ensure that the method is POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: urlInput }),  // Pass the input URL to the backend
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data); // Log the response data
        setShortenedUrl(data.short_url); // Update state with the shortened URL
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="text" id="urlInput" placeholder="Enter URL to shorten" />
      <button onClick={handleShortenUrl}>Shorten URL</button>
      {shortenedUrl && (
        <div>
          {/* Display the shortened URL */}
          Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UrlShortenerButton;
