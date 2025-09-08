import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import { CartProvider } from './context/CartContext';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/menu' exact Component={Menu} />
            <Route path='/contact' exact Component={Contact} />
            <Route path='/cart' exact Component={Cart} />
            <Route path='/faq' exact Component={FAQ} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
