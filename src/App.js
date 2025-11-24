import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './styles/globals.css';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Menu = React.lazy(() => import('./pages/Menu'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Cart = React.lazy(() => import('./pages/Cart'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Catering = React.lazy(() => import('./pages/Catering'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: 'var(--primary-color)'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/faq" exact element={<FAQ />} />
                <Route path="/catering" exact element={<Catering />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
