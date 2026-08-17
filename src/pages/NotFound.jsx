import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-icon">
        <Compass />
      </div>
      <h1 className="notfound-title">404</h1>
      <p className="notfound-desc">Page not found. The link might be broken or moved.</p>
      <Link to="/" className="notfound-link">
        Back to Home
      </Link>
    </div>
  );
}