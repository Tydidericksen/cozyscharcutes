import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Catering.css';

function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    numberOfGuests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [cateringImages, setCateringImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamically import catering images
  useEffect(() => {
    const importCateringImages = async () => {
      try {
        // Try to import images from the catering folder
        const imageContext = require.context('../assets/catering', false, /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/);
        const imagePaths = imageContext.keys();
        const images = imagePaths.map(imageContext);
        setCateringImages(images);
      } catch (error) {
        // If catering folder doesn't exist or has no images, that's okay
        console.log('No catering images found. You can add images to src/assets/catering/ folder.');
      }
    };
    importCateringImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cateringImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cateringImages.length) % cateringImages.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using the same EmailJS credentials as Contact page
      const serviceId = 'service_yc8eukp';
      const templateId = 'template_3skuqni';
      const publicKey = 'kLe_MNaPIORv5i1rJ';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `Catering Inquiry:
          
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Location: ${formData.eventLocation}
Number of Guests: ${formData.numberOfGuests}

Message:
${formData.message}`,
          to_name: 'Cozy\'s Charcutes'
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        eventDate: '', 
        eventLocation: '', 
        numberOfGuests: '', 
        message: '' 
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="catering-page">
      <div className="catering-hero">
        <h1>Catering Services</h1>
        <p className="catering-subtitle">
        Let me take care of the food and the vibe! Whether it’s brunch with friends, a dreamy dinner spread, or a fun themed setup, we create aesthetic layouts and delicious food that make people gather, smile, and stay awhile ;)</p>
      </div>

      <div className="catering-slideshow-section">
        <div className="catering-slideshow">
          {cateringImages.length > 0 ? (
            <>
              <button 
                className="slideshow-arrow slideshow-arrow-left" 
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ‹
              </button>
              <div className="slideshow-container">
                {cateringImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`slideshow-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`Catering event ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
              <button 
                className="slideshow-arrow slideshow-arrow-right" 
                onClick={nextSlide}
                aria-label="Next image"
              >
                ›
              </button>
              {cateringImages.length > 1 && (
                <div className="slideshow-dots">
                  {cateringImages.map((_, index) => (
                    <button
                      key={index}
                      className={`slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="slideshow-empty">
              <p>Error loading images</p>
            </div>
          )}
        </div>
      </div>

      <div className="catering-contact-section">
        <h2>Request a Quote</h2>
        <p className="catering-contact-intro">
        Every event is different—so our pricing adjusts based on the style, setup, and number of guests. Most requests fall between $300–$1,000+, and each quote includes food preparation, setup, and aesthetic layout design. <br /> <br /> Fill out the form below and I’ll get back to you right away with ideas and a personalized quote.
        </p>
        
        <form onSubmit={handleSubmit} className="catering-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                name="name" 
                placeholder="Enter full name..." 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                name="email" 
                placeholder="Enter email..." 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                name="phone" 
                placeholder="Enter phone number..." 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="eventDate">Event Date *</label>
              <input 
                name="eventDate" 
                type="date" 
                value={formData.eventDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventLocation">Event Location</label>
              <input 
                name="eventLocation" 
                placeholder="Enter event location..." 
                type="text" 
                value={formData.eventLocation}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="numberOfGuests">Number of Guests</label>
              <input 
                name="numberOfGuests" 
                placeholder="Estimated number of guests..." 
                type="number" 
                min="1"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Event Details & Special Requests *</label>
            <textarea 
              rows="6" 
              name="message" 
              placeholder="Tell me about your event, dietary restrictions, theme, or any special requests..." 
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Sending...' : 'Submit Catering Request'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              Thank you! Your catering request has been sent successfully. I'll get back to you soon!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Sorry, there was an error sending your request. Please try again or contact me directly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Catering;

