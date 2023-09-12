import React, { useEffect, useState } from "react";
const ApiIntegration = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const run = async () => {
      const url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://developers.google.com";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApiData(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching API data:", error);
        }
    };

    run();
  }, []);

  const showInitialContent = (id) => (
    <div>
      <h1>PageSpeed Insights API Demo</h1>
      <p>Page tested: {id}</p>
    </div>
  );

  const showCruxContent = (cruxMetrics) => (
    <div>
      <h2>Chrome User Experience Report Results</h2>
      {Object.entries(cruxMetrics).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </div>
  );

  const showLighthouseContent = (lighthouseMetrics) => {
    if (!lighthouseMetrics) {
      return <div>Lighthouse metrics not available.</div>;
    }

    return (
      <div>
        <h1>Lighthouse Results</h1>
        {Object.entries(lighthouseMetrics).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="px-8 py-5">
      {apiData && showInitialContent(apiData.id)}
      {apiData && showCruxContent({
        "First Contentful Paint": apiData.loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS?.category || "N/A",
        "First Input Delay": apiData.loadingExperience.metrics.FIRST_INPUT_DELAY_MS?.category || "N/A"
      })}
      {apiData && showLighthouseContent({
        'First Contentful Paint': apiData.lighthouseResult?.audits['first-contentful-paint']?.displayValue || "N/A",
        'Speed Index': apiData.lighthouseResult?.audits['speed-index']?.displayValue || "N/A",
        'Time To Interactive': apiData.lighthouseResult?.audits['interactive']?.displayValue || "N/A",
        'First Meaningful Paint': apiData.lighthouseResult?.audits['first-meaningful-paint']?.displayValue || "N/A",
        'First CPU Idle': apiData.lighthouseResult?.audits['first-cpu-idle']?.displayValue || "N/A",
        'Estimated Input Latency': apiData.lighthouseResult?.audits['estimated-input-latency']?.displayValue || "N/A"
      })}
    </div>
  );
};

export default ApiIntegration;
