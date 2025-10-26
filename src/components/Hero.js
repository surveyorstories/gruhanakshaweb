import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicDownloadButton from './DynamicDownloadButton';
import DocumentationButton from './DocumentationButton';

const Hero = () => {
    const [latestVersion, setLatestVersion] = useState('');

    useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/surveyorstories/gruhanaksha/releases/latest');
                setLatestVersion(response.data.tag_name);
            } catch (error) {
                console.error('Error fetching latest release:', error);
            }
        };

        fetchLatestRelease();
    }, []);

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-card">

                    <div className="hero-image">
                        <img
                            src="img/ppm.svg"
                            alt="Gruhanaksha Logo"
                            className="hero-logo"
                        />
                    </div>

                    <div className="hero-content fade-in-up" style={{ position: 'relative' }}>
                        {latestVersion && window.innerWidth > 768 && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-25px',
                                    right: '5%',
                                    transform: 'translateX(10%) rotate(-10deg)',
                                    zIndex: 10,
                                    padding: '3px 10px',
                                    backgroundColor: '#28a745',
                                    color: '#ffffff',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    borderRadius: '6px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Latest: {latestVersion}
                            </div>
                        )}
                        <h1 className="hero-title">
                            GRUHANAKSHA
                        </h1>
                        <p className="hero-subtitle">
                            A powerful QGIS plugin to support the SVAMITVA scheme. Streamline cadastral mapping and generate standardized outputs with efficiency and precision.
                        </p>
                        <div className="hero-buttons">
                            <DynamicDownloadButton />
                            <DocumentationButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
