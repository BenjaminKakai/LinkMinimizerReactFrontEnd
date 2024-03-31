import React from 'react';
import UrlShortener from './components/UrlShortener/UrlShortener';
import Analytics from './components/Analytics/Analytics';

function App() {
  return (
    <div className="app">
      <UrlShortener />
      <Analytics />
    </div>
  );
}

export default App;
