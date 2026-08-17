import { Boxes, CheckSquare, Moon, Palette, ShoppingCart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Palette,
      title: 'Context API — Theme',
      desc: 'Handles light and dark theme state across components to keep layout styling in sync without passing props.',
    },
    {
      icon: ShoppingCart,
      title: 'Redux Toolkit — Cart',
      desc: 'Manages cart items, quantities, and price calculations using useSelector and useDispatch hooks.',
    },
    {
      icon: CheckSquare,
      title: 'Redux Toolkit — FocusBoard',
      desc: 'Stores task lists, completion status, and priority levels directly within a Redux slice.',
    },
    {
      icon: Boxes,
      title: 'Project Architecture',
      desc: 'Organized into separate folders for components, pages, context, and Redux state management.',
    },
  ];

  return (
    <div className="page page-narrow-lg">
      <h1 className="page-title">About</h1>
      <p className="page-subtitle">
        Overview of the application architecture, state management implementations, and component structure.
      </p>

      <div className="about-features">
        {features.map((f) => (
          <div key={f.title} className="about-feature">
            <div className="about-feature-icon">
              <f.icon />
            </div>
            <h3 className="about-feature-title">{f.title}</h3>
            <p className="about-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-banner">
        <Moon />
        <p>
          Select products to test cart state updates or use the navbar toggle to change the current theme.
        </p>
      </div>
    </div>
  );
}