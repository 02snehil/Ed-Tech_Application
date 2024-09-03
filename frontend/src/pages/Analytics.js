import React, { useState, useEffect } from 'react';
import '../styles/Analytics.css';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    // Fetch analytics data from the API
    fetch(`/api/analytics`)
      .then(response => response.json())
      .then(data => setAnalyticsData(data))
      .catch(error => console.error('Error fetching analytics data:', error));
  }, []);

  return (
    <div className="analytics-section">
      <h3>Student Performance Analytics</h3>
      <ul>
        {analyticsData.map((item, index) => (
          <li key={index}>
            {item.metric}: {item.value}
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Exporting report...')}>
        Export Report
      </button>
    </div>
  );
};

export default Analytics;
