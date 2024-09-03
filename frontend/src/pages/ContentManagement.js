import React, { useState } from 'react';
import '../styles/contentManagement.css';

const ContentManagement = ({ phaseId }) => {
  const [resources, setResources] = useState([]);

  const addResource = (resource) => {
    setResources([...resources, resource]);
    // Send the new resource to the server
    fetch(`/api/phases/${phaseId}/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resource),
    });
  };

  return (
    <div className="content-management">
      <h3>Manage Resources for Phase {phaseId}</h3>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource.name} - {resource.required ? 'Required' : 'Optional'}</li>
        ))}
      </ul>
      <button onClick={() => addResource({ name: 'New Resource', required: true })}>
        Add New Resource
      </button>
    </div>
  );
};

export default ContentManagement;
