import React, { useState } from 'react';

function UrlShortenerButton() {
  const [response, setResponse] = useState(null);

  const handleShortenUrl = () => {
    const urlInput = document.getElementById('urlInput').value.trim(); // Get the input value
    if (!urlInput) {
      console.error('Please enter a valid URL.');
      return;
    }

    fetch('http://localhost:3000/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: urlInput }),  // Pass the input URL to the backend
    })
    .then(response => response.json())
.then(data => {
  console.log('Response data:', data); // Log the response data
  setResponse(data); // Update state with the response data
})
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <button onClick={handleShortenUrl}>Shorten URL</button>
      {response && (
        <div>
          {/* Display the shortened URL */}
          Shortened URL: <a href={response.shortUrl} target="_blank">{response.shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default UrlShortenerButton;
