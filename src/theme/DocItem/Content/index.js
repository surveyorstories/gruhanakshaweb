import React from "react";
import Content from "@theme-original/DocItem/Content";

function AdComponent() {
  // Don't render ad in development
  if (process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <div style={{ margin: '2rem 0' }}>
      {/* This is the ad unit */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5740737782081297"
        data-ad-slot="1234567890" // TODO: Replace with your real ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script
        dangerouslySetInnerHTML={{
          __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      />
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