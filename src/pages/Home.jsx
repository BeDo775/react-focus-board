import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, CheckSquare, Moon, Palette, ShoppingCart } from 'lucide-react';

export default function Home() {
  const cards = [
    {
      icon: ShoppingCart,
      title: 'Store',
      desc: 'Browse available products and manage cart items using Redux Toolkit.',
      to: '/store',
    },
    {
      icon: CheckSquare,
      title: 'FocusBoard',
      desc: 'Manage daily tasks, set priority levels, and track completed items.',
      to: '/focusboard',
    },
    {
      icon: Palette,
      title: 'Theme',
      desc: 'Switch between light and dark themes seamlessly using Context API.',
      to: '/about',
    },
  ];

  return (
    <div className="page">
      <section className="hero">
        <span className="hero-badge">
          <Boxes />
          Context API + Redux Toolkit
        </span>
        <h1 className="hero-title">FocusShop</h1>
        <p className="hero-desc">
          A web application built with React, combining product store management with a task tracking system.
        </p>
        <div className="hero-actions">
          <Link to="/store" className="btn-hero-primary">
            Visit the store
            <ArrowRight />
          </Link>
          <Link to="/focusboard" className="btn-hero-ghost">
            Open FocusBoard
          </Link>
        </div>
      </section>

      <div className="card-grid card-grid-3">
        {cards.map((card) => (
          <Link key={card.title} to={card.to} className="feature-card">
            <div className="feature-card-icon">
              <card.icon />
            </div>
            <h3 className="feature-card-title">{card.title}</h3>
            <p className="feature-card-desc">{card.desc}</p>
            <span className="feature-card-link">
              Explore
              <ArrowRight />
            </span>
          </Link>
        ))}
      </div>

      <div className="info-banner">
        <Moon />
        <p>
          Toggle between light and dark modes from the navigation bar to update the entire theme state.
        </p>
      </div>
    </div>
  );
}