import React from 'react';

const GiphyEmbed = () => {
  return (
    <div style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
      <iframe 
        src="/images/blog/gif3.gif" 
         loading="lazy"
        width="100%" 
        height="100%" 
        style={{ position: 'absolute' }} 
        frameBorder="0" 
        className="giphy-embed" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default GiphyEmbed;
