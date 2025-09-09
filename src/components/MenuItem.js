import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuantityModal from './QuantityModal';
import CustomOrderModal from './CustomOrderModal';
import '../styles/MenuItem.css';

function MenuItem({ id, name, image, price, description, serves, category }) {
  const { addToCart } = useCart();
  const [showQuantityModal, setShowQuantityModal] = useState(false);
  const [showCustomOrderModal, setShowCustomOrderModal] = useState(false);
  
  const isVariablePrice = price === "Price varies";
  const hasMinimumOrder = id === 'charcuterie-cups' || id === 'charcuterie-boxes';

  const handleAddToCart = () => {
    if (isVariablePrice) {
      setShowCustomOrderModal(true);
    } else {
      setShowQuantityModal(true);
    }
  };

  const handleQuantitySubmit = (quantity) => {
    addToCart({
      id,
      name,
      price,
      description,
      serves,
      category,
      quantity
    });
    setShowQuantityModal(false);
  };

  // Create the full item object for CustomOrderModal
  const item = {
    id,
    name,
    image,
    price,
    description,
    serves,
    category
  };

  return (
    <>
      <div className="menu-item">
        <div className="menu-item-image">
          <img 
            src={image} 
            alt={name}
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="menu-item-content">
          <h3 className="menu-item-name">{name}</h3>
          <p className="menu-item-description">{description}</p>
          
          {hasMinimumOrder && (
            <p className="minimum-order-note">Minimum Order: 10 pieces</p>
          )}
          
          {!isVariablePrice && !hasMinimumOrder && (
            <p className="menu-item-serves">Serves: {serves}</p>
          )}
          
          <div className="menu-item-footer">
            <span className="menu-item-price">
              {isVariablePrice ? "Price varies" : `$${price.toFixed(2)}`}
            </span>
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              {isVariablePrice ? "Get Quote" : "Add to Order"}
            </button>
          </div>
        </div>
      </div>

      <QuantityModal
        isOpen={showQuantityModal}
        itemName={name}
        itemPrice={price}
        onSubmit={handleQuantitySubmit}
        onClose={() => setShowQuantityModal(false)}
        hasMinimumOrder={hasMinimumOrder}
      />

      <CustomOrderModal
        isOpen={showCustomOrderModal}
        item={item}
        onClose={() => setShowCustomOrderModal(false)}
      />
    </>
  );
}

export default MenuItem;
