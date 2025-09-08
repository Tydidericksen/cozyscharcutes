import React, { useState, useEffect } from 'react';
import '../styles/QuantityModal.css';

function QuantityModal({ isOpen, onClose, onSubmit, itemName, hasMinimumOrder = false }) {
  const [quantity, setQuantity] = useState(hasMinimumOrder ? 10 : 1);

  useEffect(() => {
    if (isOpen) {
      setQuantity(hasMinimumOrder ? 10 : 1);
    }
  }, [isOpen, hasMinimumOrder]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const qty = Math.max(hasMinimumOrder ? 10 : 1, Number(quantity) || (hasMinimumOrder ? 10 : 1));
    onSubmit(qty);
  };

  return (
    <div className="quantity-modal-overlay" role="dialog" aria-modal="true">
      <div className="quantity-modal">
        <button className="qm-close" onClick={onClose} aria-label="Close">×</button>
        <h3 className="qm-title">Add to Order</h3>
        <p className="qm-subtitle">How many "{itemName}" would you like?</p>
        {hasMinimumOrder && (
          <p className="qm-minimum-note">Minimum order: 10 pieces</p>
        )}
        <form onSubmit={handleSubmit} className="qm-form">
          <label htmlFor="quantity" className="qm-label">Quantity</label>
          <input
            id="quantity"
            type="number"
            min={hasMinimumOrder ? 10 : 1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="qm-input"
            required
          />
          <div className="qm-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Add to Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuantityModal;
