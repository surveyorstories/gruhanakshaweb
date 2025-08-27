import React, { useEffect, useState } from "react";
import axios from "axios"; // You may need to install axios: npm install axios
import posthog from "posthog-js";

const DynamicDownloadButton = () => {
  const [downloadLink, setDownloadLink] = useState("");
  const [latestRelease, setLatestRelease] = useState(null); // Store latest release name and version
  const [oldReleases, setOldReleases] = useState([]); // Store old releases
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state
  const [qgisPluginLink, setQgisPluginLink] = useState(""); // Store QGIS plugin download link
  const [qgisVersion, setQgisVersion] = useState("1.0.0"); // Update this manually when new QGIS plugin version is released

  useEffect(() => {
    // Fetch all releases from GitHub
    const fetchGitHubReleases = axios.get("https://api.github.com/repos/surveyorstories/gruhanaksha/releases");

    // Try to fetch QGIS plugin page to extract version info
    const fetchQgisPluginVersion = async () => {
      try {
        // This approach tries to get the plugin info from QGIS repository
        // Note: This might be blocked by CORS, so we have fallbacks
        const response = await fetch("https://plugins.qgis.org/api/v1/plugins/gruhanaksha/");
        const data = await response.json();
        if (data && data.version) {
          setQgisVersion(data.version);
          setQgisPluginLink(`https://plugins.qgis.org/plugins/gruhanaksha/version/${data.version}/download/`);
        } else {
          // Fallback to hardcoded version if API doesn't work
          setQgisPluginLink(`https://plugins.qgis.org/plugins/gruhanaksha/version/${qgisVersion}/download/`);
        }
      } catch (error) {
        console.warn("Could not fetch QGIS plugin version, using fallback:", error);
        // Fallback: Use GitHub release version or hardcoded version
        setQgisPluginLink(`https://plugins.qgis.org/plugins/gruhanaksha/version/${qgisVersion}/download/`);
      }
    };

    // Execute both requests
    Promise.all([fetchGitHubReleases, fetchQgisPluginVersion()])
      .then(([githubResponse]) => {
        const releases = githubResponse.data;
        const latest = releases[0]; // First release is the latest one
        const latestAsset = latest.assets[0]; // Assuming the first asset is the one you want

        if (latestAsset) {
          setDownloadLink(latestAsset.browser_download_url);
          setLatestRelease({
            name: latest.name,
            version: latest.tag_name, // Version is typically the `tag_name`
          });

          // If QGIS plugin link wasn't set by API, try using GitHub version
          if (!qgisPluginLink) {
            const cleanVersion = latest.tag_name.replace(/^v/, ''); // Remove 'v' prefix if exists
            setQgisPluginLink(`https://plugins.qgis.org/plugins/gruhanaksha/version/${cleanVersion}/download/`);
          }
        }

        // Exclude the latest release and get the next 3 releases
        const oldReleaseLinks = releases.slice(1, 3).map((release) => ({
          name: release.name,
          url: release.assets[0].browser_download_url,
        }));
        setOldReleases(oldReleaseLinks);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        setError("Error fetching release data.");
        setLoading(false); // Stop loading on error
        console.error("Error fetching release data:", error);
        // Set fallback QGIS link even if GitHub fails
        setQgisPluginLink(`https://plugins.qgis.org/plugins/gruhanaksha/version/${qgisVersion}/download/`);
      });
  }, []);

  const handleDownload = (release) => {
    posthog.capture("download_clicked", {
      release_name: release.name,
      download_url: release.url,
    });
  };

  return (
    <>
      <button className="download-button" role="button" aria-label="Download button">
        Download
        <div className="dropdown-content">
          {loading ? (
            <p>Loading...</p> // Display loading message or spinner
          ) : error ? (
            <p>{error}</p> // Display error message
          ) : (
            <>
              {latestRelease && (
                <div className="latest-release-section">
                  <a
                    href={qgisPluginLink}
                    download
                    aria-label="Download from QGIS Plugin Repository"
                    onClick={() => handleDownload({ name: "QGIS Plugin", url: qgisPluginLink })}
                  >
                    Download from QGIS Plugins
                  </a>

                  <a
                    href="https://plugins.qgis.org/plugins/gruhanaksha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="QGIS Plugin Page"
                  >
                    QGIS Plugin Page
                  </a>

                  <a
                    aria-label="Latest Release"
                    href={downloadLink}
                    download
                    onClick={() => handleDownload({ name: latestRelease.name, url: downloadLink })}
                  >
                    Latest: {latestRelease.name}
                    {/* ({latestRelease.version}) */}
                  </a>

                </div>
              )}
            </>
          )}

          <div>
            <p>Old Releases</p>
            {oldReleases.length > 0 ? (
                            oldReleases.map((release, index) => (
                <a
                  key={index}
                  href={release.url}
                  download
                  onClick={() => handleDownload(release)}
                >
                  {release.name}
                </a>
              ))
            ) : (
              <p>No old releases available.</p>
            )}
          </div>

          <a href="./releases" target="_blank" rel="noopener noreferrer">
            All Releases
          </a>
        </div>
      </button>
    </>
  );
};

export default DynamicDownloadButton;