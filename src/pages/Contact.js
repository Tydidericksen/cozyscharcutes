import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import GrazingTable from '../assets/GrazingTable.jpg';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_yc8eukp';
      const templateId = 'template_3skuqni';
      const publicKey = 'kLe_MNaPIORv5i1rJ';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Cozy\'s Charcutes'
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${GrazingTable})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Full Name</label>
          <input 
            name='name' 
            placeholder='Enter full name...' 
            type='text' 
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor='email'>Email</label>
          <input 
            name='email' 
            placeholder='Enter email...' 
            type='email' 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor='message'>Message</label>
          <textarea 
            rows='6' 
            name='message' 
            placeholder='Enter your message...' 
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
