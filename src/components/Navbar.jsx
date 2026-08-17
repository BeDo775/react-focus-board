import { NavLink, Link } from 'react-router-dom';
import { CheckSquare, ShoppingBag, Store } from 'lucide-react';
import { useAppSelector } from '../redux/hooks';
import { selectCartCount } from '../redux/slices/cartSlice';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'Home' },
  { to: '/store', label: 'Store' },
  { to: '/focusboard', label: 'FocusBoard' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ onCartClick }) {
  const cartCount = useAppSelector(selectCartCount);

  return (
    <header className="navbar">
      <div className="nav-container d-flex align-items-center justify-content-between gap-3">
        <Link
          to="/"
          className="nav-brand d-flex align-items-center text-decoration-none"
        >
          <span className="nav-brand-icon">
            <Store />
          </span>

          <span className="nav-brand-text">
            Focus<span className="accent">Shop</span>
          </span>
        </Link>

        <nav className="nav-links d-flex align-items-center gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-decoration-none ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions d-flex align-items-center gap-2">
          <ThemeToggle />

          <Link
            to="/focusboard"
            className="nav-icon-link d-flex align-items-center justify-content-center"
            aria-label="FocusBoard"
          >
            <CheckSquare />
          </Link>

          <button
            onClick={onCartClick}
            className="cart-btn d-flex align-items-center gap-2"
          >
            <ShoppingBag />
            <span className="cart-label">Cart</span>

            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}