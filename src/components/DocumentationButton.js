import React from "react";
import Link from "@docusaurus/Link";

const DocumentationButton = () => {
  return (
    <button className="docs-button" role="button">
      <span className="buttons">
        <Link to="/docs">Read Docs</Link>
      </span>
    </button>
  );
};

export default DocumentationButton;
