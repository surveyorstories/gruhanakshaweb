import React, { useEffect } from 'react';

export default function AdUnit({ adSlot }) {
  // Don't render ads in local development mode to avoid polluting statistics
  if (process.env.NODE_ENV === 'development') {
    return (
      <div style={{
        margin: '2rem 0',
        padding: '1rem',
        border: '2px dashed #ccc',
        textAlign: 'center',
        background: '#f9f9f9',
        color: '#666',
        borderRadius: '8px'
      }}>
        <strong>[Google AdSense Ad Slot: {adSlot}]</strong> (Visible only in production)
      </div>
    );
  }

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div style={{ margin: '2rem 0', textAlign: 'center', minHeight: '100px' }}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5740737782081297"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}
