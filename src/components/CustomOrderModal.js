import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../context/CartContext';
import '../styles/CustomOrderModal.css';

function CustomOrderModal({ isOpen, onClose, item }) {
  const { addToCart } = useCart();
  const [formData, setFormData] = useState({
    // Grazing Table specifics
    tableSizeMeasurements: '',
    setupStartTime: '',
    setupCompleteTime: '',
    takedownTime: '',
    indoorOutdoor: '',
    shadeAvailability: '',
    inspoLinks: '',
    // Other custom options
    eventType: '',
    isMainFood: '',
    guestCount: '',
    specialRequests: '',
    deliveryAddress: '',
    deliveryInstructions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add the item to cart with custom options
    addToCart({
      ...item,
      price: 'Custom Quote',
      customOptions: formData,
      quantity: 1
    });
    
    onClose();
  };

  if (!isOpen) return null;

  const isGrazingTable = item?.id === 'grazing-table';

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Customize Your {item?.name}</h2>
          <button className="close-btn" onClick={onClose}><CloseIcon /></button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          {isGrazingTable && (
            <div className="form-section">
              <h3>Grazing Table Details</h3>
              <div className="form-group">
                <label htmlFor="tableSizeMeasurements">Size of table to cover (measurements) *</label>
                <input type="text" id="tableSizeMeasurements" name="tableSizeMeasurements" placeholder="e.g., 8ft x 3ft rectangle" value={formData.tableSizeMeasurements} onChange={handleInputChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="setupStartTime">What time can I start setting up?</label>
                  <input type="time" id="setupStartTime" name="setupStartTime" value={formData.setupStartTime} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="setupCompleteTime">What time do you need it fully set up by?</label>
                  <input type="time" id="setupCompleteTime" name="setupCompleteTime" value={formData.setupCompleteTime} onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="takedownTime">What time should I return to take down?</label>
                  <input type="time" id="takedownTime" name="takedownTime" value={formData.takedownTime} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="guestCount">Number of Guests *</label>
                  <input type="number" id="guestCount" name="guestCount" min="1" value={formData.guestCount} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="indoorOutdoor">Is the event indoors or outdoors? *</label>
                  <select id="indoorOutdoor" name="indoorOutdoor" value={formData.indoorOutdoor} onChange={handleInputChange} required>
                    <option value="">Select one</option>
                    <option value="indoor">Indoors</option>
                    <option value="outdoor">Outdoors</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="shadeAvailability">If outdoors, will it be in the shade?</label>
                  <select id="shadeAvailability" name="shadeAvailability" value={formData.shadeAvailability} onChange={handleInputChange}>
                    <option value="">Select one</option>
                    <option value="full-shade">Yes, full shade</option>
                    <option value="partial-shade">Partial shade</option>
                    <option value="no-shade">No shade</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inspoLinks">Specific details or themes? Any inspiration links/photos?</label>
                <textarea id="inspoLinks" name="inspoLinks" placeholder="Describe your theme and paste any links to inspo pics (Instagram, Pinterest, etc.)" rows="3" value={formData.inspoLinks} onChange={handleInputChange} />
              </div>
              <div className="form-note">
                <strong>Important notes:</strong>
                <ul>
                  <li>I do not provide tables, tablecloths, plates, napkins, or forks.</li>
                  <li>I do not replenish the table during the event.</li>
                  <li>I provide food, setup, cleanup, prep, serving utensils, styling, labels, etc.</li>
                </ul>
              </div>
              <div className="form-note">
                <strong>Deposit & Payment Terms:</strong>
                <p>
                  $500 non-refundable deposit for orders over $1000 (if canceled less than one week before the event). $250 deposit for orders over $500. The remaining balance is due the day before or the day of the event.
                </p>
              </div>
            </div>
          )}

          <div className="form-section">
            <h3>Event Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventType">What type of event is this? *</label>
                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleInputChange} required>
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="graduation">Graduation</option>
                  <option value="holiday">Holiday Party</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="isMainFood">Is this the main food for the event?</label>
                <select id="isMainFood" name="isMainFood" value={formData.isMainFood} onChange={handleInputChange}>
                  <option value="">Select one</option>
                  <option value="yes">Yes, main food</option>
                  <option value="no">No, appetizer/snack</option>
                </select>
              </div>
            </div>
            {!isGrazingTable && (
              <div className="form-group">
                <label htmlFor="guestCount">Number of Guests *</label>
                <input type="number" id="guestCount" name="guestCount" min="1" value={formData.guestCount} onChange={handleInputChange} required />
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>Delivery Information</h3>
            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address *</label>
              <textarea id="deliveryAddress" name="deliveryAddress" value={formData.deliveryAddress} onChange={handleInputChange} placeholder="Full delivery address..." rows="3" required />
            </div>
            <p className="form-note">
              Don't worry if you don't have all the specifics yet — I'll be in contact to coordinate details. Please include whatever information you have now; I understand events can change and I'll work with you.
            </p>
            <div className="form-group">
              <label htmlFor="deliveryInstructions">Delivery Instructions</label>
              <textarea id="deliveryInstructions" name="deliveryInstructions" value={formData.deliveryInstructions} onChange={handleInputChange} placeholder="Special delivery instructions, access codes, etc." rows="2" />
            </div>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests or Dietary Restrictions</label>
              <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleInputChange} placeholder="Any allergies, dietary restrictions, or special requests..." rows="2" />
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-primary submit-btn">
              Save preferences
            </button>
            <p className="form-note">
              * Required fields. I'll contact you within 24 hours to confirm details and provide pricing.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomOrderModal;
