import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import emailjs from '@emailjs/browser';
import BasicInfoModal from '../components/BasicInfoModal';
import '../styles/Cart.css';

function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [orderNotes, setOrderNotes] = useState('');
  const [showBasicInfoModal, setShowBasicInfoModal] = useState(false);
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: ''
  });

  const isCustomItem = (item) => {
    return typeof item.price === 'string' || item.customOptions;
  };

  const getItemPrice = (item) => {
    if (isCustomItem(item)) {
      return 'Custom Quote';
    }
    return `$${item.price.toFixed(2)}`;
  };

  const getItemTotal = (item) => {
    if (isCustomItem(item)) {
      return 'Custom Quote';
    }
    return `$${(item.price * item.quantity).toFixed(2)}`;
  };

  const formatOrderDetails = (basicInfoData) => {
    let orderText = 'ORDER REQUEST DETAILS:\n\n';
    
    // Add basic information
    orderText += `CUSTOMER INFORMATION:\n`;
    orderText += `- Name: ${basicInfoData.name}\n`;
    orderText += `- Email: ${basicInfoData.email}\n`;
    orderText += `- Phone: ${basicInfoData.phone}\n`;
    orderText += `- Event Date: ${basicInfoData.eventDate}\n`;
    orderText += `- Event Time: ${basicInfoData.eventTime || 'Not specified'}\n\n`;
    
    // Add order items
    orderText += `ORDER ITEMS:\n`;
    items.forEach((item, index) => {
      orderText += `${index + 1}. ${item.name}\n`;
      orderText += `   Price: ${getItemTotal(item)}\n`;
      orderText += `   Quantity: ${item.quantity}\n`;
      orderText += `   Serves: ${item.serves}\n`;
      
      if (item.customOptions) {
        orderText += `   CUSTOM OPTIONS:\n`;
        
        // Grazing Table specific options
        if (item.customOptions.tableSizeMeasurements) orderText += `   - Table Size: ${item.customOptions.tableSizeMeasurements}\n`;
        if (item.customOptions.guestCount) orderText += `   - Guest Count: ${item.customOptions.guestCount}\n`;
        if (item.customOptions.setupStartTime) orderText += `   - Setup Start: ${item.customOptions.setupStartTime}\n`;
        if (item.customOptions.setupCompleteTime) orderText += `   - Setup Complete: ${item.customOptions.setupCompleteTime}\n`;
        if (item.customOptions.takedownTime) orderText += `   - Takedown Time: ${item.customOptions.takedownTime}\n`;
        if (item.customOptions.indoorOutdoor) orderText += `   - Indoor/Outdoor: ${item.customOptions.indoorOutdoor}\n`;
        if (item.customOptions.shadeAvailability) orderText += `   - Shade: ${item.customOptions.shadeAvailability}\n`;
        if (item.customOptions.inspoLinks) orderText += `   - Inspiration: ${item.customOptions.inspoLinks}\n`;
        
        // Delivery Info
        if (item.customOptions.deliveryAddress) orderText += `   - Delivery Address: ${item.customOptions.deliveryAddress}\n`;
        if (item.customOptions.deliveryInstructions) orderText += `   - Delivery Instructions: ${item.customOptions.deliveryInstructions}\n`;
        if (item.customOptions.specialRequests) orderText += `   - Special Requests: ${item.customOptions.specialRequests}\n`;
      }
      
      orderText += '\n';
    });

    // Add order notes if provided
    if (orderNotes.trim()) {
      orderText += `ADDITIONAL NOTES:\n${orderNotes}\n\n`;
    }

    return orderText;
  };

  const handleSubmitOrder = async (basicInfoData) => {
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    const serviceId = 'service_yc8eukp';
    const templateId = 'template_1l5yful';
    const publicKey = 'kLe_MNaPIORv5i1rJ';

    const orderDetails = formatOrderDetails(basicInfoData);

    const templateParams = {
      from_name: basicInfoData.name,
      from_email: basicInfoData.email,
      order_details: orderDetails,
      total_items: items.length,
      order_date: new Date().toLocaleDateString(),
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Show success popup first
      alert('Thank you for your order! We\'ll review your request and get back to you within 24 hours to confirm availability and pricing.');
      
      // Then clear the cart
      clearCart();
      setOrderNotes('');
      setBasicInfo({ name: '', email: '', phone: '', eventDate: '', eventTime: '' });
    } catch (error) {
      console.error('Error sending order:', error);
      alert('Failed to submit order request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitOrderClick = () => {
    setShowBasicInfoModal(true);
  };

  const handleBasicInfoSubmit = (basicInfoData) => {
    setBasicInfo(basicInfoData);
    handleSubmitOrder(basicInfoData);
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
          <h1>Order Request</h1>
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
                  <p className="cart-item-serves">Serves: {item.serves}</p>
                  
                  {item.customOptions && (
                    <div className="custom-options">
                      <p className="custom-label">Custom Options:</p>
                      <p className="custom-details">
                        Event: {item.customOptions.eventType} • 
                        Guests: {item.customOptions.guestCount} • 
                        Date: {item.customOptions.eventDate}
                      </p>
                    </div>
                  )}
                </div>
                
                {!isCustomItem(item) && (
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
                )}
                
                <div className="cart-item-price">
                  <span className="price">{getItemTotal(item)}</span>
                  {!isCustomItem(item) && (
                    <span className="unit-price">{getItemPrice(item)} each</span>
                  )}
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
            <h2>Request Summary</h2>
            
            <div className="summary-item">
              <span>Items Requested</span>
              <span>{items.length}</span>
            </div>

            <div className="order-notes-section">
              <h3>Additional Notes</h3>
              <p className="notes-description">
                Please let us know about any allergies, dietary restrictions, special requests, or other important details:
              </p>
              <textarea
                className="order-notes"
                placeholder="e.g., Allergies: nuts, dairy. Special requests: extra olives, no spicy items. Delivery notes: Ring doorbell twice..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                rows="4"
              />
            </div>
            
            <div className="cart-actions">
              <button
                className="btn btn-secondary clear-cart-btn"
                onClick={clearCart}
              >
                Clear Request
              </button>
              
              <button
                className="btn btn-primary checkout-btn"
                onClick={handleSubmitOrderClick}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order Request'}
              </button>
            </div>
            
            <div className="delivery-info">
              <h3>What Happens Next?</h3>
              <p>• I'll review your request within 24 hours</p>
              <p>• I'll confirm availability and provide pricing</p>
              <p>• Once approved, I'll coordinate delivery details</p>
              <p>• Custom items may require additional consultation</p>
            </div>
          </div>
        </div>
      </div>

      <BasicInfoModal
        isOpen={showBasicInfoModal}
        onClose={() => setShowBasicInfoModal(false)}
        onSubmit={handleBasicInfoSubmit}
      />
    </div>
  );
}

export default Cart;
