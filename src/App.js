import React from 'react';
import Analytics from './components/Analytics/Analytics';
import ShortenerBody from './components/UrlShortener/UrlShortener';

function App() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'100vh',
      background: 'linear-gradient(to bottom, #36D1DC, #5B86E5)'
    }}>
      <ShortenerBody/>
    </div>
  );
}

export default App;
