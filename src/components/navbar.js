import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { getCartCount } = useCart();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <span className="logo-text">Cozy</span>
            <span className="logo-accent">Charcutes</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Cart Icon */}
        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <ShoppingCartIcon className="cart-icon" />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleNavbar}>
          {openLinks ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${openLinks ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={() => setOpenLinks(false)}>
          Home
        </Link>
        <Link to="/menu" className="mobile-nav-link" onClick={() => setOpenLinks(false)}>
          Menu
        </Link>
        <Link to="/about" className="mobile-nav-link" onClick={() => setOpenLinks(false)}>
          About
        </Link>
        <Link to="/contact" className="mobile-nav-link" onClick={() => setOpenLinks(false)}>
          Contact
        </Link>
        <Link to="/cart" className="mobile-nav-link cart-mobile" onClick={() => setOpenLinks(false)}>
          Cart ({getCartCount()})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;