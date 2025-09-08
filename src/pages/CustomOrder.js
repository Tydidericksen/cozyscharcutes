import React, { useState } from 'react';
import '../styles/CustomOrder.css';

function CustomOrder() {
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    phone: '',
    
    // Event Details
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: '',
    isMainFood: '',
    
    // Board Preferences
    boardSize: '',
    boardStyle: '',
    dietaryRestrictions: [],
    allergies: '',
    
    // Food Preferences
    meatPreferences: [],
    cheesePreferences: [],
    fruitPreferences: [],
    crackerPreferences: [],
    dessertItems: [],
    
    // Special Requests
    theme: '',
    colorScheme: '',
    specialRequests: '',
    deliveryAddress: '',
    deliveryInstructions: '',
    
    // Additional Info
    budget: '',
    additionalNotes: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or email service
    console.log('Custom Order Form Data:', formData);
    alert('Thank you for your custom order request! We\'ll contact you within 24 hours to confirm details and pricing.');
  };

  return (
    <div className="custom-order-page">
      <div className="container">
        <div className="order-header">
          <h1>Custom Order Request</h1>
          <p>Tell me about your event and I'll create the perfect charcuterie board for you!</p>
        </div>

        <form onSubmit={handleSubmit} className="order-form">
          {/* Basic Information */}
          <div className="form-section">
            <h2>Basic Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date *</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventTime">Event Time</label>
                <input
                  type="time"
                  id="eventTime"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="guestCount">Number of Guests *</label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select number of guests</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="11-20">11-20 people</option>
                  <option value="21-30">21-30 people</option>
                  <option value="31-50">31-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="form-section">
            <h2>Event Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventType">Type of Event *</label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="holiday">Holiday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="bridal-shower">Bridal Shower</option>
                  <option value="graduation">Graduation</option>
                  <option value="date-night">Date Night</option>
                  <option value="family-gathering">Family Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="isMainFood">Will this be the main food or accompanying other food? *</label>
                <select
                  id="isMainFood"
                  name="isMainFood"
                  value={formData.isMainFood}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select option</option>
                  <option value="main">Main food (no other food served)</option>
                  <option value="accompanying">Accompanying other food</option>
                  <option value="appetizer">Appetizer before main meal</option>
                  <option value="dessert">Dessert board</option>
                </select>
              </div>
            </div>
          </div>

          {/* Board Preferences */}
          <div className="form-section">
            <h2>Board Preferences</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="boardSize">Preferred Board Size</label>
                <select
                  id="boardSize"
                  name="boardSize"
                  value={formData.boardSize}
                  onChange={handleInputChange}
                >
                  <option value="">Select board size</option>
                  <option value="small">Small (4-6 people)</option>
                  <option value="medium">Medium (8-12 people)</option>
                  <option value="large">Large (15-20 people)</option>
                  <option value="extra-large">Extra Large (25+ people)</option>
                  <option value="grazing-table">Grazing Table</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="boardStyle">Board Style</label>
                <select
                  id="boardStyle"
                  name="boardStyle"
                  value={formData.boardStyle}
                  onChange={handleInputChange}
                >
                  <option value="">Select board style</option>
                  <option value="traditional">Traditional Charcuterie</option>
                  <option value="dessert">Dessert Board</option>
                  <option value="breakfast">Breakfast Board</option>
                  <option value="vegan">Vegan Board</option>
                  <option value="gluten-free">Gluten-Free Board</option>
                  <option value="mixed">Mixed (Sweet & Savory)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="allergies">Allergies & Dietary Restrictions</label>
              <textarea
                id="allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                placeholder="Please list any allergies or dietary restrictions..."
                rows="3"
              />
            </div>
          </div>

          {/* Food Preferences */}
          <div className="form-section">
            <h2>Food Preferences</h2>
            
            <div className="checkbox-group">
              <h3>Meat Preferences</h3>
              <div className="checkbox-grid">
                {['Prosciutto', 'Salami', 'Chorizo', 'Pepperoni', 'Capicola', 'Bresaola', 'Soppressata', 'Mortadella'].map(meat => (
                  <label key={meat} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="meatPreferences"
                      value={meat}
                      checked={formData.meatPreferences.includes(meat)}
                      onChange={handleInputChange}
                    />
                    <span>{meat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="checkbox-group">
              <h3>Cheese Preferences</h3>
              <div className="checkbox-grid">
                {['Brie', 'Cheddar', 'Gouda', 'Manchego', 'Blue Cheese', 'Goat Cheese', 'Parmesan', 'Mozzarella'].map(cheese => (
                  <label key={cheese} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="cheesePreferences"
                      value={cheese}
                      checked={formData.cheesePreferences.includes(cheese)}
                      onChange={handleInputChange}
                    />
                    <span>{cheese}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="checkbox-group">
              <h3>Fruit Preferences</h3>
              <div className="checkbox-grid">
                {['Grapes', 'Strawberries', 'Apples', 'Pears', 'Berries', 'Figs', 'Dried Fruit', 'Seasonal Fruit'].map(fruit => (
                  <label key={fruit} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="fruitPreferences"
                      value={fruit}
                      checked={formData.fruitPreferences.includes(fruit)}
                      onChange={handleInputChange}
                    />
                    <span>{fruit}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="checkbox-group">
              <h3>Dessert Items (if applicable)</h3>
              <div className="checkbox-grid">
                {['Chocolate', 'Macarons', 'Cookies', 'Brownies', 'Candied Nuts', 'Honey', 'Jam', 'Chocolate Covered Fruit'].map(dessert => (
                  <label key={dessert} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="dessertItems"
                      value={dessert}
                      checked={formData.dessertItems.includes(dessert)}
                      onChange={handleInputChange}
                    />
                    <span>{dessert}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="form-section">
            <h2>Special Requests & Theme</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="theme">Theme or Occasion</label>
                <input
                  type="text"
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  placeholder="e.g., Valentine's Day, Halloween, Baby Shower, etc."
                />
              </div>
              <div className="form-group">
                <label htmlFor="colorScheme">Preferred Color Scheme</label>
                <input
                  type="text"
                  id="colorScheme"
                  name="colorScheme"
                  value={formData.colorScheme}
                  onChange={handleInputChange}
                  placeholder="e.g., Red & Gold, Pastels, Black & White, etc."
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any specific requests, decorations, or special touches..."
                rows="3"
              />
            </div>
          </div>

          {/* Delivery Information */}
          <div className="form-section">
            <h2>Delivery Information</h2>
            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address</label>
              <textarea
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                placeholder="Full delivery address..."
                rows="3"
              />
            </div>
            <div className="form-group">
              <label htmlFor="deliveryInstructions">Delivery Instructions</label>
              <textarea
                id="deliveryInstructions"
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleInputChange}
                placeholder="Special delivery instructions, access codes, etc."
                rows="2"
              />
            </div>
          </div>

          {/* Budget & Additional Info */}
          <div className="form-section">
            <h2>Additional Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range (Optional)</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200 - $300</option>
                  <option value="300-500">$300 - $500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                placeholder="Any other information you'd like us to know..."
                rows="4"
              />
            </div>
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit Custom Order Request
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

export default CustomOrder;
