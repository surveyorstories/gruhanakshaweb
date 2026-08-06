import React, { useEffect } from "react";
import Content from "@theme-original/DocItem/Content";

function AdComponent() {
  // Show a placeholder in local development mode
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
        <strong>[Global AdSense Ad Slot]</strong> (Visible only in production)
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
        data-ad-slot="7599347439"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}

export default function ContentWrapper(props) {
  return (
    <>
      <AdComponent />
      <Content {...props} />
      <AdComponent />
    </>
  );
}