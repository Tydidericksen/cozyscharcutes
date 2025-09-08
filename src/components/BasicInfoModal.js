import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/BasicInfoModal.css';

function BasicInfoModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: ''
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
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate) {
      alert('Please fill in all required fields.');
      return;
    }
    
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="basic-info-modal-overlay">
      <div className="basic-info-modal-content">
        <div className="basic-info-modal-header">
          <h2>Order Information</h2>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="basic-info-modal-form">
          <p className="modal-description">
            Please provide your contact information and event details to complete your order request:
          </p>
          
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
                placeholder="Enter your full name"
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
                placeholder="Enter your email address"
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
                placeholder="Enter your phone number"
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
                placeholder="Optional"
              />
            </div>
            <div className="form-group">
              {/* Empty div for spacing */}
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit Request
            </button>
          </div>
          
          <p className="form-note">
            * Required fields. I'll contact you within 24 hours to confirm details and provide pricing.
          </p>
        </form>
      </div>
    </div>
  );
}

export default BasicInfoModal;
