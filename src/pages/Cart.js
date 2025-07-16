import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../styles/Cart.css';

function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Here you would typically integrate with a payment processor
    // For now, we'll just show a success message
    setTimeout(() => {
      alert('Order placed successfully! Thank you for choosing Cozy Charcutes.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/menu" className="btn btn-primary">
              Browse Our Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/menu" className="back-link">
            <ArrowBackIcon />
            Continue Shopping
          </Link>
          <h1>Shopping Cart</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-serves">Serves: {item.serves}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <RemoveIcon />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <AddIcon />
                  </button>
                </div>
                
                <div className="cart-item-price">
                  <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  <span className="unit-price">${item.price.toFixed(2)} each</span>
                </div>
                
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-item">
              <span>Subtotal ({items.length} items)</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>$5.00</span>
            </div>
            
            <div className="summary-item total">
              <span>Total</span>
              <span>${(getCartTotal() + 5).toFixed(2)}</span>
            </div>
            
            <div className="cart-actions">
              <button
                className="btn btn-secondary clear-cart-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              
              <button
                className="btn btn-primary checkout-btn"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
            
            <div className="delivery-info">
              <h3>Delivery Information</h3>
              <p>• Free delivery for orders over $50</p>
              <p>• Standard delivery: 2-3 business days</p>
              <p>• Express delivery available for additional fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 