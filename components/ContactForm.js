import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Full name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              id="message"
              name="message"
              style={{ height: '10rem' }}
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button className="btn btn-primary btn-xl" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
