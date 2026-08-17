import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="theme-toggle"
    >
      <span className={`theme-toggle-knob ${isDark ? 'dark' : 'light'}`}>
        {isDark ? (
          <Moon className="moon" />
        ) : (
          <Sun className="sun" />
        )}
      </span>
    </button>
  );
}