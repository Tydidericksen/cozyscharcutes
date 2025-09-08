import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CustomOrderModal from './CustomOrderModal';
import QuantityModal from './QuantityModal';
import '../styles/MenuItem.css';

function MenuItem({ image, name, price, description, serves, category, id }) {
  const [showModal, setShowModal] = useState(false);
  const [showQtyModal, setShowQtyModal] = useState(false);
  const { addToCart } = useCart();

  const handleGetQuote = () => {
    setShowModal(true);
  };

  const handleAddToOrder = () => {
    setShowQtyModal(true);
  };

  const handleQuantitySubmit = (quantity) => {
    addToCart({ id, name, price, image, description, serves, category, quantity });
    setShowQtyModal(false);
  };

  const isVariablePrice = price === null || typeof price === 'string';
  const hasMinimumOrder = id === 'charcuterie-cups' || id === 'charcuterie-boxes';
  const showServes = !isVariablePrice && !hasMinimumOrder;

  return (
    <>
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
            <span className="menu-item-price">
              {isVariablePrice ? 'Price varies' : `$${price.toFixed(2)}`}
            </span>
          </div>
          
          <p className="menu-item-description">{description}</p>
          
          {hasMinimumOrder && (
            <div className="menu-item-minimum">
              <span className="minimum-label">Minimum Order:</span>
              <span className="minimum-value">10 pieces</span>
            </div>
          )}
          
          {showServes && (
            <div className="menu-item-serves">
              <span className="serves-label">Serves:</span>
              <span className="serves-value">{serves}</span>
            </div>
          )}
          
          <div className="menu-item-actions">
            <button 
              className="add-to-cart-btn"
              onClick={isVariablePrice ? handleGetQuote : handleAddToOrder}
            >
              <ShoppingCartIcon />
              {isVariablePrice ? 'Get Quote' : 'Add to Order'}
            </button>
          </div>
        </div>
      </div>

      <CustomOrderModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        item={{
          id,
          name,
          price,
          image,
          description,
          serves,
          category
        }}
      />

      <QuantityModal
        isOpen={showQtyModal}
        onClose={() => setShowQtyModal(false)}
        onSubmit={handleQuantitySubmit}
        itemName={name}
        hasMinimumOrder={hasMinimumOrder}
      />
    </>
  );
}

export default MenuItem;
