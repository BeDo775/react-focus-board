import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import { ThemeProvider } from '@/context/ThemeContext';
import Home from '@/pages/Home';
import Store from '@/pages/Store';
import FocusBoardPage from '@/pages/FocusBoardPage';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false);

  return (
    <ThemeProvider>
      <div className="app min-vh-100 d-flex flex-column">
        <Navbar onCartClick={handleOpenCart} />

        <main className="app-main flex-grow-1 container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/focusboard" element={<FocusBoardPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="app-footer py-3 mt-auto">
          <div className="container text-center">
            <p className="mb-0">
              FocusShop — Abdelrahman Ahmed Sayed
            </p>
          </div>
        </footer>

        <CartDrawer open={cartOpen} onClose={handleCloseCart} />
      </div>
    </ThemeProvider>
  );
}