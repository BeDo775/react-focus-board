import React from 'react';

export default function About() {
  return (
    <div className="container mt-5 text-light">
      <h2 className="text-primary mb-3">About FocusBoard</h2>
      <p className="lead">
        FocusBoard is a productivity management application built with ReactJS to help students organize their tasks effectively.
      </p>
      <div className="card bg-dark text-light border-secondary p-4 mt-4">
        <h5>Key Features:</h5>
        <ul>
          <li>Task Management with Local Storage</li>
          <li>Dynamic Title Updates via Hooks</li>
          <li>Multiple Styling Approaches (Modules, Bootstrap, Styled Components)</li>
          <li>Multi-page Navigation with React Router DOM</li>
        </ul>
      </div>
    </div>
  );
}