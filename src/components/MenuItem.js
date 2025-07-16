// MenuItem.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/MenuItem.css';

function MenuItem({ image, name, price, description, serves, category, id }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      description,
      serves,
      category
    });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="menu-item card">
      <div className="menu-item-image">
        <img src={image} alt={name} />
        <div className="menu-item-overlay">
          <div className="menu-item-category">{category}</div>
        </div>
      </div>
      
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{name}</h3>
          <span className="menu-item-price">${price.toFixed(2)}</span>
        </div>
        
        <p className="menu-item-description">{description}</p>
        
        <div className="menu-item-serves">
          <span className="serves-label">Serves:</span>
          <span className="serves-value">{serves}</span>
        </div>
        
        <div className="menu-item-actions">
          <div className="quantity-selector">
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <RemoveIcon />
            </button>
            <span className="quantity-display">{quantity}</span>
            <button 
              className="quantity-btn"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <AddIcon />
            </button>
          </div>
          
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <ShoppingCartIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
