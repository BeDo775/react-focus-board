import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center text-light mt-5">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-secondary">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
}