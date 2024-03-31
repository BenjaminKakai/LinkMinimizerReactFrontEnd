import React, { useState } from 'react';
import axios from 'axios';

function ShortUrlForm() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/shorten', {
        long_url: originalUrl
      });


          
      setShortenedUrl(`http://localhost:3000/short_urls/${response.data.short_code}`);
    } catch (error) {
      console.error('There was an error shortening the URL:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL to shorten"
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortenedUrl && <p>Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a></p>}
    </div>
  );
}

export default ShortUrlForm;
