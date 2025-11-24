import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <span className="logo-text">COZY'S</span>
            <span className="logo-accent">CHARCUTES</span>
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/catering" className="nav-link">Catering</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <ShoppingCartIcon />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>
        </div>
        
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <ReorderIcon />
        </div>
      </div>
      
      <div className={`navbar-menu ${openLinks ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setOpenLinks(false)}>
          Home
        </Link>
        <Link to="/menu" className="nav-link" onClick={() => setOpenLinks(false)}>
          Menu
        </Link>
        <Link to="/catering" className="nav-link" onClick={() => setOpenLinks(false)}>
          Catering
        </Link>
        <Link to="/faq" className="nav-link" onClick={() => setOpenLinks(false)}>
          FAQ
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => setOpenLinks(false)}>
          Contact
        </Link>
        <Link to="/cart" className="nav-link" onClick={() => setOpenLinks(false)}>
          Cart ({getCartCount()})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
