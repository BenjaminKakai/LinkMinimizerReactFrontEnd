import React, { useState } from 'react';
import axios from 'axios';

function ShortUrlForm() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://quiet-reef-21453-76e7ef99e759.herokuapp.com/shorten', { // Updated backend endpoint URL
        url: originalUrl // Change long_url to url
      });
      setShortenedUrl(`https://quiet-reef-21453-76e7ef99e759.herokuapp.com/${response.data.short_code}`);
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
