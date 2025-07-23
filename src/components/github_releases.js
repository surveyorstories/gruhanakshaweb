import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const GitHubReleases = ({ owner, repo }) => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/releases`
        );
        setReleases(response.data);
      } catch (error) {
        console.error("Error fetching releases:", error);
      }
    };

    fetchReleases();
  }, [owner, repo]);

  return (
    <div style={{ maxWidth: "60%", margin: "0 auto", minWidth: "340px" }}>
      <h2
        style={{ textAlign: "center", margin: "30px auto", marginTop: "20px" }}
      >
        Gruhanaksha Releases
      </h2>
      {releases.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {releases.map((release, index) => (
            <li
              key={release.id}
              style={{
                border: "2px solid rgb(203 72 72)",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <h2>
                {release.name}
                {index === 0 && (
                  <span
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      padding: "4px 8px",
                      borderRadius: "7px",
                      backgroundColor: "#2ea44f",
                      color: "#ffffff",
                      position: "relative",

                      top: "-4px",
                      right: "-12px",
                      fontWeight: "bold",
                    }}
                  >
                    Latest
                  </span>
                )}
              </h2>
              <ReactMarkdown children={release.body} />
              <div style={{ marginTop: "20px" }}>
                {release.assets.length > 0 && (
                  <div
                    style={{
                      border: "1px solid #024545",
                      borderRadius: "8px",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <strong>Assets:</strong>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {release.assets.map((asset) => (
                        <li key={asset.id} style={{ margin: "5px 0" }}>
                          <a
                            href={asset.browser_download_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              background: "#007bff",
                              color: "#fff",
                              textDecoration: "none",
                              marginRight: "10px",
                              marginBottom: "10px",
                              fontSize: "13px", // Adjusted font size
                            }}
                          >
                            {asset.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: "20px" }}
              >
                View release on GitHub
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Getting Releases... </p>
      )}
    </div>
  );
};

export default GitHubReleases;
